
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


import Carousel from 'react-bootstrap/Carousel';


const Men=()=>{
    return(
        <>
        

        
      {/* this is the curosel for the slider */}



      <Carousel slide={false} style={{padding:"px" }}>
      <Carousel.Item>
        <img src='https://fashion.minimog.co/cdn/shop/files/slide-1-min_736dbd98-a213-4692-9d51-fd3a1d69a6db.jpg?v=1708569972&width=2200' width="1610px" height="600"></img>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       <img src='https://fashion.minimog.co/cdn/shop/files/slide-3-min_0543107f-58c2-41d0-9d2f-6438bb08acbe.jpg?v=1708570034&width=2200' width="1610px" height="600"></img>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://fashion.minimog.co/cdn/shop/files/slide-3-min_0543107f-58c2-41d0-9d2f-6438bb08acbe.jpg?v=1708570034&width=2200' width="1610px" height="600"></img>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>







      {/* THIS IS THE BADGES  AND THE BREAD BREADCRUMB */}

  




   










      <Row style={{marginTop:"50px",padding:"20px 10px 20px 10px"}}>
        <Col xs={6} md={4}>
          <Image src="https://images-static.nykaa.com/uploads/ced33b07-2bc1-46ac-a048-073ee9313f20.jpg?tr=w-2400,cm-pad_resize" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://images-static.nykaa.com/uploads/0023f77c-4b32-492a-a627-9376c9497aff.jpg?tr=w-2400,cm-pad_resize" thumbnail />
        </Col>
        <Col xs={6} md={4}>
          <Image src="https://images-static.nykaa.com/uploads/32c5e62d-6284-4d63-a743-14b49fe832a3.jpg?tr=w-1200,cm-pad_resize" thumbnail />
        </Col>

      </Row>
   


 {/* THIS IS THE CATEGORY SECTION FOR THE MEN */}


 <h1 style={{textAlign:"center",marginTop:"50px",backgroundColor:"snow",borderRadius:"10PX"}}><marquee>SALES 20%  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Use Code-New</marquee></h1>
  <div>
<Row style={{margin:"auto",padding:"50px"}}>
       <div style={{borderRadius:"50%",borderColor:"50%" ,border:"2px solid",width:"200px",height:"200px",} }>
        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/5/a5671cf7004735438_1.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /> <h4 className='my-3' style={{marginLeft:"45px"}}>Jeans</h4>
        </Col>
        </div>

        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/a/aaa97fbSSMRE24CSMSSRT5568_1.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /><h4 className='my-3' style={{marginLeft:"55px"}}>Shirt</h4>
        </Col>
    

        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/4/6476ae6SH-30087-A.FORCE_0.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /><h4 className='my-3' style={{marginLeft:"41px"}}>T-Shirt</h4>
        </Col>

        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/8/c/8c45185ANAHTR2289_1.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /><h4 className='my-3' style={{marginLeft:"40px"}}>Formal</h4>
        </Col>

        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/3/b/3b22560256458_1.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /><h4 className='my-3' style={{marginLeft:"45px"}}>Shoes</h4>
        </Col>

        <Col xs={6} md={2}>
          <Image src="https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/b/b/bbd6f92249826_0.jpg?rnd=20200526195200&tr=w-256" height="170px" width="170px" style={{border:"2px solid black"}} roundedCircle /><h4 className='my-3' style={{marginLeft:"45px"}}>Cargos</h4>
        </Col>
      </Row>
      </div>





    <Container>
        <h1 style={{textAlign:"center"}}> SHOP BY BRANDS</h1>
      <Row style={{marginTop:"80px"}}>
        <Col xs={6} md={3}>
          <Image src="https://images-static.nykaa.com/uploads/fde7a578-3ade-40f7-aad5-f2b3aa3d86cb.jpg?tr=w-240,cm-pad_resize" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="https://images-static.nykaa.com/uploads/03c5e81f-12d3-4cf3-b493-60b94591fac3.jpg?tr=w-240,cm-pad_resize" thumbnail />
        </Col>
        <Col xs={6} md={3}>
          <Image src="https://images-static.nykaa.com/uploads/06322258-bd98-4110-99fa-7d8c69f7ec8f.jpg?tr=w-240,cm-pad_resize" thumbnail />
        </Col>

        <Col xs={6} md={3}>
          <Image src="https://images-static.nykaa.com/uploads/3d28f9a0-b93c-475f-8861-2376a406d953.jpg?tr=w-240,cm-pad_resize" thumbnail />
        </Col>

      </Row>
    </Container>


        
        </>
    )
}

export default Men;