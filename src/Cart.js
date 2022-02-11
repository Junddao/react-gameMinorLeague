import React from "react";
import { Table } from "react-bootstrap";
import { connect, useSelector, useDispatch } from "react-redux";

function Cart(props) {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  console.log(state);

  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {state.map((a, i) => {
            return (
              <tr key={i}>
                <td>{a.id}</td>
                <td>{a.name}</td>
                <td>{a.quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "add", data: a });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "minus", data: a });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alertState === true ? (
        <div className="my-alert">
          <p>지금 구매하시면 신규할인 20%</p>
          <button
            onClick={() => {
              props.dispatch({ type: "close" });
            }}
          >
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
}

// function GetStore(state) {
//   //   console.log(state);
//   return {
//     storeState: state.reducer,
//     alertState: state.reducer2,
//   };
// }

// export default connect(GetStore)(Cart);
export default Cart;
