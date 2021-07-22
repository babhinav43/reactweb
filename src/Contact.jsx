import React from 'react';

const Contact = () => {

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter your phone number" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">Submit form</button>
                </div>
              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;