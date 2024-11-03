
import { useEffect, useState } from 'react';
import './App.css';
import { Button, Card, CardBody, CardFooter, CardHeader, Image, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';

function App() {
  const [allMovies, setAllMovies] = useState(false);
  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NTEwZTUyMTQwYzJjMDBjMzE3Y2M4ZGVmNmI1YTM3YyIsIm5iZiI6MTczMDU5ODY3My4zNTAyOTM0LCJzdWIiOiI2NzI1MGE3Zjg4NmQ1ZThhNWIzZGU3YTIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n2iPz82D0ZA3OlimWw4PDU-Rdxj514RTCD_xgS7Whyk'
  console.log('allMovies', allMovies)
  useEffect(() => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setAllMovies(json))
      .catch(err => console.error(err));
  }, [token])
  return (
    <main className="App">
      <Navbar>
        <NavbarBrand>
          <div>  <svg fill="none" height="36" viewBox="0 0 32 32" width="36">
            <path
              clipRule="evenodd"
              d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg></div>
          <p className="font-bold text-inherit">Jefsaenz</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <section>
        <article className="container mx-auto p-4">
          <div className="columns-3 gap-8 bg-slate-900 p-4 flex flex-row flex-wrap justify-center items-center" >
            {
              allMovies && allMovies.results.length > 0 ?
                allMovies.results.map((item, i) => (

                  <Card key={i} className="py-4 m-4">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">Rate: {item.vote_average}</p>
                      <small className="text-default-500">Release date: {item.release_date}</small>
                      <h4 className="font-bold text-large">{item.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}
                        width={270}
                      />
                    </CardBody>
                  </Card>

                ))
                :
                <><h2>No hay Pelis. Validar TOKEN {':('}</h2></>
            }

          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
