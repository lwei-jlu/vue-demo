FROM registry.haier.net/library/nginx:1.13.8-alpine
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
RUN echo "Asia/Shanghai" > /etc/timezone
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/ /usr/share/nginx/html/manager