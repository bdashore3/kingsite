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

#[get("/images/favicon.png")]
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
        .mount("/", routes![index, tailwind, favicon])
        .register(catchers![not_found])
}
