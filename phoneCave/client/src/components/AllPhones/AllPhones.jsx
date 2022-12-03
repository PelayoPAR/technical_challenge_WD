import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Error from "../../components/"

function AllPhones() {
  const [phoneList, setPhoneList] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);
  // const navigate = useNavigate();
  const [showPhoneDetails, setShowPhoneDetails] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    axios
      .get("http://localhost:5005/phones/")
      .then((result) => {
        setPhoneList(result.data);
      })
      .catch((err) => {
        console.error(err);
        // setIsError(true);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });
  }, []);
  console.log(phoneList);
  console.log(showPhoneDetails);

  // if (isLoading) {
  //   return <Loading />;
  // }

  // if (isError) {
  //   return <Error />;
  // }

  return (
    <div>
      <h2>all Phones</h2>
      <div>
        {phoneList &&
          phoneList.map((phone) => {
            return (
              <div key={phone.id}>
                <div>
                  <h3>{phone.name}</h3>
                  {/* <Link to={`/phones/${phone.id}`}> */}
                  <img
                    // onClick={() => {
                    //   navigate(`phones/${phone.id}`);
                    // }}
                    onClick={() => {
                      setShowPhoneDetails(!showPhoneDetails);
                    }}
                    src={`/images/${phone.imageFileName}`}
                    alt="phoneImg"
                  />
                  {showPhoneDetails && (
                    <div>
                      <p>details</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllPhones;
