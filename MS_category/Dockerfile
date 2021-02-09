# Step 1 select default OS image
FROM python:3.6.1-alpine


# # Step 2 tell what you want to do

RUN pip3 install --upgrade pip
RUN pip install flask-eureka
# # Step 3 Configure a software
# # Defining working directory
WORKDIR /app

# # Copy everything which is present in my docker directory to working (/app)
COPY /requirements.txt /app

RUN pip3 install -r requirements.txt

COPY ["category.py", "/app"]
RUN apk add --no-cache bash
COPY wait-for-it.sh /app
RUN chmod +x /app/wait-for-it.sh
# Exposing an internal port
EXPOSE 5003


# Step 4 set default commands
# These are permanent commands i.e even if user will provide come commands those will be considered as argunemts of this command

ENTRYPOINT ["/app/wait-for-it.sh", "MSEureka.aliases:8761", "--","python3","category.py"]
