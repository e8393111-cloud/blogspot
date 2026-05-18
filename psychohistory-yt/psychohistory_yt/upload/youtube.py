from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path

from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from googleapiclient.http import MediaFileUpload

SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]


@dataclass(frozen=True)
class UploadResult:
    video_id: str
    url: str


class YouTubeUploader:
    def __init__(self, client_secret_file: Path, token_file: Path):
        self._client_secret_file = client_secret_file
        self._token_file = token_file
        self._service = None

    def _creds(self) -> Credentials:
        creds: Credentials | None = None
        if self._token_file.exists():
            creds = Credentials.from_authorized_user_file(str(self._token_file), SCOPES)
        if not creds or not creds.valid:
            if creds and creds.expired and creds.refresh_token:
                creds.refresh(Request())
            else:
                if not self._client_secret_file.exists():
                    raise FileNotFoundError(
                        f"OAuth client secret not found: {self._client_secret_file}. "
                        "Download from Google Cloud Console (OAuth 2.0 Client ID, Desktop app)."
                    )
                flow = InstalledAppFlow.from_client_secrets_file(
                    str(self._client_secret_file), SCOPES
                )
                creds = flow.run_local_server(port=0)
            self._token_file.parent.mkdir(parents=True, exist_ok=True)
            self._token_file.write_text(creds.to_json())
        return creds

    def _client(self):
        if self._service is None:
            self._service = build("youtube", "v3", credentials=self._creds())
        return self._service

    def upload(
        self,
        video_path: Path,
        *,
        title: str,
        description: str,
        tags: list[str],
        category_id: str = "27",
        privacy_status: str = "private",
        made_for_kids: bool = False,
    ) -> UploadResult:
        body = {
            "snippet": {
                "title": title[:100],
                "description": description[:5000],
                "tags": tags[:500],
                "categoryId": category_id,
                "defaultLanguage": "ko",
                "defaultAudioLanguage": "ko",
            },
            "status": {
                "privacyStatus": privacy_status,
                "selfDeclaredMadeForKids": made_for_kids,
            },
        }
        media = MediaFileUpload(str(video_path), chunksize=-1, resumable=True, mimetype="video/mp4")
        request = self._client().videos().insert(
            part="snippet,status", body=body, media_body=media
        )
        response = None
        while response is None:
            _, response = request.next_chunk()
        return UploadResult(
            video_id=response["id"],
            url=f"https://www.youtube.com/shorts/{response['id']}",
        )
