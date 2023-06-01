import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

import CardMoviesComponents from "../../Components/CardMovies";
import PaginationComponent from "../../Components/Pagination";

const HomeContainer = () => {
  const [content, setContent] = useState([]);
  const [pageno, setPageno] = useState(1);
  const [paginationno, setPaginationno] = useState(0);

  const API_KEY = process.env.REACT_APP_NOT_SECRET_CODE;
  const GetDataTrending = async () => {
    const { data } = await axios.get(
      // `https://deezerdevs-deezer.p.rapidapi.com/infos?api_key=${API_KEY}&page=${pageno}`
      `https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyCTNupUdbjvYR7qErqZ1AQSNYKUhqgAJo8&q=Happy song&maxResults=10`
    );
    //set data
    // setContent(data.results);
    // setPaginationno(data.total_pages);
    console.log("data", data);
  };
  useEffect(() => {
    GetDataTrending();
  }, []);
  const handleClick = (number)=>{
    setPageno(number);
}
useEffect(()=>{
  console.log('Trending Component didupdate mount');
  GetDataTrending();
  //eslint-disable-next-line
}, [pageno])
  return (
    <main className="homePage">
      <Container>
        <Row>
          <Col className="col-12">
            <section>
              <h1 className="txtCenter">Top Trending </h1>
              <h3 className="txtCenter">Tv and Movie For You</h3>
            </section>
          </Col>
          {
          content && content.length > 0 ? content.map((item, index) => {
                return <CardMoviesComponents key={index} data={item} mediaType="Tv" />;
              })
            : "Loading ...."
            }
            {
                    paginationno && paginationno > 1 ? <PaginationComponent maxnum={paginationno} activenum={pageno} handleClick={handleClick}/> : ''
                }
        </Row>
      </Container>
    </main>
  );
};
export default HomeContainer;
