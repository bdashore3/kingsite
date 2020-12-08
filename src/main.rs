use rocket::{
    response::{NamedFile, Responder},
    Request, *,
};
use rocket_contrib::serve::StaticFiles;

#[get("/")]
async fn index<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("html/index.html").await.ok()
}

#[get("/favicon.svg")]
async fn favicon<'a>() -> impl Responder<'a, 'static> {
    NamedFile::open("images/favicon.svg").await.ok()
}

#[catch(404)]
async fn not_found(req: &Request<'_>) -> String {
    format!("Whoops. That's a 404: {}", req)
}

#[launch]
async fn rocket() -> rocket::Rocket {
    rocket::ignite()
        .mount("/_next", StaticFiles::from("html/_next"))
        .mount("/", routes![index])
        .mount("/images", routes![favicon])
        .register(catchers![not_found])
}
