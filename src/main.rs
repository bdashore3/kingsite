use rocket::{
    response::{NamedFile, Responder},
    Request, *,
};

#[get("/")]
async fn index<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("html/index.html").await.ok()
}

#[get("/tailwind.css")]
async fn tailwind<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("css/tailwind.css").await.ok()
}

#[get("/test.css")]
async fn test_css<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("css/test.css").await.ok()
}

#[get("/favicon.png")]
async fn favicon<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/favicon.png").await.ok()
}

#[catch(404)]
async fn not_found(req: &Request<'_>) -> String {
    format!("Whoops. That's a 404: {}", req)
}

#[launch]
async fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/", routes![index])
        .mount("/css", routes![tailwind, test_css])
        .mount("/images", routes![favicon])
        .register(catchers![not_found])
}
