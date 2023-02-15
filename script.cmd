@REM @echo off

rem Navigate to the directory where your Spring Boot app is located
cd C:\Users\Mido\Desktop\easySchool\api\demo

rem Start your Spring Boot app
start cmd /k mvn spring-boot:run

rem Navigate to the directory where your React app is located
cd C:\Users\Mido\Desktop\easySchool\frontend

rem Start your React app
start cmd /k npm run concurrent