import { useState } from "react";

export default function CommentFrom() {
  let [formData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...formData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  };

  return (
    <>
      <h1>Drop a comment</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="userName"
          value={formData.username}
          onChange={handleInputChange}
          name="username"
        />
        <br />
        <br />
        <textarea
          value={formData.remark}
          placeholder="add few remarks"
          onChange={handleInputChange}
          name="remark"
        >
          Remark
        </textarea>
        <br />
        <br />
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formData.rating}
          onChange={handleInputChange}
          name="rating"
        />
        <br />
        <br />
        <button>post comment</button>
      </form>
    </>
  );
}
