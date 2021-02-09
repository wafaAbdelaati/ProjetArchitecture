FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app


FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY *.csproj .
RUN dotnet restore --disable-parallel "API_Client.csproj"

COPY . .

RUN dotnet build "API_Client.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "API_Client.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY wait-for-it.sh .
RUN chmod +x ./wait-for-it.sh
COPY --from=publish /app/publish .
ENV ASPNETCORE_URLS=http://+:5000
EXPOSE 5000

ENTRYPOINT ["./wait-for-it.sh", "MSEureka.aliases:8761", "--","dotnet", "API_Client.dll"]



