import React, { useEffect, useState } from "react";
import axios from "axios";
// import Error from "../../components/"

function AllPhones() {
  const [phoneList, setPhoneList] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

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
                <h3>{phone.name}</h3>

                <img
                  src={`/images/${phone.imageFileName}`}
                  alt="phoneImg"
                ></img>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default AllPhones;
