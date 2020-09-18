import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';


const Mission = () => {
  return (
    <Container style={{ marginTop: '120px' }}>
      <Row>
        <Col>
          <div>
            <div className="container" id="about_page">
              <div className="row">
                <div className="col">
                  <h3>Mission</h3>
                  <br />
                  <p>To create, build and promote healthy thriving businesses within the black community, to positively
                  contribute to the economic empowerment, growth and development of the black community for this
              generation and future generations.</p>
                  <br />
                  <h3>Vision</h3>
                  <br />
                  <p>To see an increase in communities where black businesses thrive and the underserved are economically
              empowered.</p>
                  <h3>Goals</h3>
                  <br />
                  <p>To provide economic empowerment to the black community.</p>
                  <br />
                  <h3>Our History</h3>
                  <br />
                  <p>SCU was formed to address racism, division within the black community, and police brutality that plagues us through education, neighborhood cleanup, and grant assistance.  SCU believes that through economic empowerment we can bridge the racial wealth gap.  In bridging the racial wealth gap African American students will do better in school therefor reducing the high dropout rate.  SCU believes there is power in numbers.  Together we can demand justice and equality.  SCU believes that if we want better, we have to be better.  We have to be financially prepared for a natural disaster.  We do not want to continue to see repeats of America’s response to Katrina in the African American neighborhood.  SCU will help people develop a savings plan for a natural disaster that will enable them to provide for their own shelter, food, and medical needs. African Americans fall behind in basic financial skills necessary to develop and maintain a budget, to understand credit, to understand investment vehicles, or to take advantage of our banking system. It is essential to provide basic financial education that allows people to better navigate an economic crisis such as this one.</p>
                  <br />
                  <p>SCU will have a big impact on the community through our neighborhood cleanup. The house and neighborhood where one grows up impacts the health and longevity of one’s life. Having a safe, decent, stable, affordable home also impacts a child’s success in school. However, many African Americans live outside of safe, stable neighborhoods. The urban revitalization also brings more services to an area.</p>
                  <br /><br />
                </div>
              </div>
            </div>
            <br className="mb-6" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}


export default Mission;
