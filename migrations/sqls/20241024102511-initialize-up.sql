CREATE TABLE "Users"(
    "Id" SERIAL PRIMARY KEY,
    "ComponyName" VARCHAR(255) NOT NULL,
    "Username" VARCHAR(255) NOT NULL,
    "Password" VARCHAR(255) NOT NULL,
    "IsActive" VARCHAR(255) NOT NULL
);

CREATE TABLE "Logs"(
    "Id" SERIAL PRIMARY KEY,
    "UserId" INTEGER NOT NULL,
    "Url" VARCHAR(255) NOT NULL,
    "Ip" VARCHAR(255) NOT NULL,
    "Method" VARCHAR(255) NOT NULL,
    "Params" TEXT,
    "Query" TEXT,
    "Body" TEXT,
    "Error" TEXT,
    "Response" VARCHAR(255),
    FOREIGN KEY("UserId") REFERENCES "Users"("Id") ON DELETE CASCADE
)