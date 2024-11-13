# Étape 1 : Utilisation d'une image Maven et OpenJDK 17 pour la compilation
FROM maven:3.8.8-eclipse-temurin-21 AS build
WORKDIR /app

# Copier les fichiers pom.xml et src dans l'image Docker
COPY pom.xml ./
COPY src ./src

# Exécuter la commande Maven pour compiler et empaqueter le projet sans les tests
RUN mvn clean package -DskipTests

# Étape 2 : Utilisation d'une image OpenJDK 17 plus légère pour exécuter l'application
FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app

# Copier le fichier JAR généré depuis l'étape précédente
COPY --from=build /app/target/laboratory_service-0.0.1-SNAPSHOT.jar /app/laboratory_service.jar

# Exposer le port 8080 pour accéder à l'application
EXPOSE 8080

# Commande pour démarrer l'application Spring Boot
CMD ["java", "-jar", "laboratory_service.jar"]
