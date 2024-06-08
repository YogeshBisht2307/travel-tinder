CREATE TABLE "tt_user_profile" (
    "user_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "profile_picture" TEXT NOT NULL
);

ALTER TABLE "tt_user_profile" ADD PRIMARY KEY("user_id");