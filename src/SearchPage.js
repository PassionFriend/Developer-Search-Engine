import React, { useEffect, useState } from "react";
import "./SearchPage.css";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import Response from "./response";
import Search from "./Search";

import logo from "./images/hello-logo.webp";

// or
import { Link } from "@mui/material";

import { Grid } from "@mui/material";
import { Button } from "@mui/material";

import { Typography } from "@mui/material";

function SearchPage() {
  const [count, setCount] = useState([]); // initialize state
  const [{ term }, dispatch] = useStateValue();
  // LIVE API CALL
  //const { data } = useGoogleSearch(term);

  // MOCK API CALL
  const data = Response;

  useEffect(() => {
    data?.items.map((item) =>
      fetch(
        `https://api.codetabs.com/v1/proxy?quest=https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/arrays/`
      )
        .then(function (response) {
          if (response.status !== 200) {
            console.log(
              "Looks like there was a problem. Status Code: " + response.status
            );
            return;
          }

          // Examine the text in the response
          response.text().then(function (data) {
            // data contains all the plain html of the url you previously set,
            // you can use it as you want, it is typeof string

            console.log(data);
          });
        })
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        })
    );
  }, []);

  console.log(data);

  return (
    <Grid
      container
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "#222222",
      }}
    >
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        xl={12}
        style={{ paddingTop: "20px" }}
      >
        <Grid
          container
          style={{
            alignItems: "center",
            justify: "center",
          }}
        >
          <Grid item xs={12} sm={12} md={1.5} lg={1.5} xl={1.5}>
            <Link href="/">
              <img
                src={logo}
                style={{
                  width: "100%",
                }}
              />
            </Link>
          </Grid>
          <Grid item xs={12} sm={12} md={4.5} lg={4.5} xl={4.5}>
            <Search hideButtons />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} sm={12} md={1.5} lg={1.5} xl={1.5}></Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={4.5}
        lg={4.5}
        xl={4.5}
        style={{ padding: "20px", paddingLeft: "0", paddingRight: "50px" }}
      >
        <Typography
          style={{
            color: "white",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          {term}
        </Typography>

        <div style={{ width: "50px" }}>
          <div
            dangerouslySetInnerHTML={{
              __html: `${count}`,
            }}
          />
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        lg={6}
        xl={6}
        style={{ padding: "20px", paddingLeft: "50px", paddingRight: "200px" }}
      >
        {true && (
          <div>
            {/*<Typography>
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime}) for {term}
              </Typography>*/}

            {data?.items.map((item) => (
              <div style={{ paddingBottom: "20px" }}>
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography
                    style={{
                      color: "#8ab5f5",
                      fontSize: "20px",
                      fontWeight: "500",
                    }}
                  >
                    {item.title}
                  </Typography>
                </a>
                <a href={item.link} style={{ textDecoration: "none" }}>
                  <Typography
                    style={{
                      color: "#898d90",
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    {item.displayLink}
                  </Typography>
                </a>
                <Typography
                  style={{
                    color: "#bdc1c4",
                    fontSize: "15px",
                    fontWeight: "500",
                  }}
                >
                  {item.snippet}

                  {/*blah(`https://api.codetabs.com/v1/proxy?quest=${item.link}`)*/}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </Grid>
    </Grid>
  );
}
export default SearchPage;
