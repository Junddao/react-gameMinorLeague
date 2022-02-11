import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";

import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";

function Detail(props) {
  let [isAlertVisible, setIsAlertVisible] = useState(true);
  let [inputData, setInputData] = useState("");
  let [selectedTab, setSelectedTab] = useState(0);
  let [aniSwitch, setAniSwitch] = useState(false);

  let { id } = useParams();
  let history = useNavigate();
  let findItem = props.shoes.find((x) => x.id == id);

  useEffect(() => {
    let timer = setTimeout(() => {
      setIsAlertVisible(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(props);

  return (
    <div className="container">
      {inputData}
      {isAlertVisible === true ? (
        <div className="my-alert-red">
          <p>재고가 얼마 안남았어용</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={"http://gamechart100.com/data/file/B11/thumb/" + findItem.id}
            width="100%"
            alt=""
          />
        </div>

        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{findItem.title}</h4>
          <p>{findItem.content}</p>
          <p>{findItem.price}</p>
          {/* {console.log(props)} */}

          <StockInfo stock={props.stock}></StockInfo>

          <button
            className="btn btn-danger"
            onClick={() => {
              props.setStock([]);
              props.dispatch({
                type: "addItem",
                payload: { id: findItem.id, name: findItem.title, quantity: 1 },
              });

              history.push("/cart");
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              setAniSwitch(false);
              setSelectedTab(0);
            }}
          >
            Active
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              setAniSwitch(false);
              setSelectedTab(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={aniSwitch} classNames="wow" timeout={500}>
        <TabContent selectedTab={selectedTab} setAniSwitch={setAniSwitch} />
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  useEffect(() => {
    props.setAniSwitch(true);
  });
  if (props.selectedTab === 0) {
    return <div> 0번째</div>;
  } else if (props.selectedTab === 1) {
    return <div> 1번째</div>;
  } else {
    return <div> 2번째</div>;
  }
}

function StockInfo(props) {
  return <p>재고 : {props.stock[0]}</p>;
}

function GetStore(state) {
  //   console.log(state);
  return {
    storeState: state.reducer,
    alertState: state.reducer2,
  };
}

export default connect(GetStore)(Detail);
