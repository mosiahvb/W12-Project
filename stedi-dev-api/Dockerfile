# Dockerfile

# Use the official Python image as base image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install dependencies
RUN pip install --no-cache-dir flask

# Expose port 8080
EXPOSE 8080

# Command to run the API
CMD ["python", "app.py"]
