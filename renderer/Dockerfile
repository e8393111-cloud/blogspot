# Build context is this directory (renderer/).
#   docker build -t cardnews-renderer ./renderer
#   docker run -p 8000:8000 -e PUBLIC_BASE_URL=http://localhost:8000 cardnews-renderer
FROM python:3.12-slim

# Noto Sans CJK so Korean text renders. fonts.py picks it up automatically.
RUN apt-get update \
 && apt-get install -y --no-install-recommends fonts-noto-cjk fonts-noto-cjk-extra \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .

ENV PORT=8000
EXPOSE 8000
CMD ["sh", "-c", "uvicorn main:app --host 0.0.0.0 --port ${PORT}"]
