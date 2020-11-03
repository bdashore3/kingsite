use rocket::{
    *,
    Request,
    response::{NamedFile, Responder}
};

#[get("/")]
async fn index<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("html/index.html").await.ok()
}

#[get("/css/tailwind.css")]
async fn tailwind<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("css/tailwind.css").await.ok()
}

#[get("/css/test.css")]
async fn test_css<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("css/test.css").await.ok()
}

#[get("/images/favicon.png")]
async fn favicon<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/favicon.png").await.ok()
}

#[get("/images/Email.png")]
async fn email_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Email.png").await.ok()
}

#[get("/images/GitHub.png")]
async fn github_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/GitHub.png").await.ok()
}

#[get("/images/Twitch.jpg")]
async fn twitch_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Twitch.jpg").await.ok()
}

#[get("/images/Youtube.png")]
async fn youtube_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Youtube.png").await.ok()
}

#[get("/images/Twitter.png")]
async fn twitter_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Twitter.png").await.ok()
}

#[get("/images/Discord.png")]
async fn discord_image<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Discord.png").await.ok()
}

#[get("/Contact-bg.webm")]
async fn contact_webm<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/Contact-bg.webm").await.ok()
}

#[catch(404)]
async fn not_found(req: &Request<'_>) -> String {
    format!("Whoops. That's a 404: {}", req)
}

#[launch]
async fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![
            index,
            tailwind,
            test_css,
            favicon,
            email_image,
            github_image,
            twitch_image,
            youtube_image,
            twitter_image,
            discord_image,
            contact_webm,
        ])
        .register(catchers![not_found])
}
