import React from "react";
import "./register.css";
import Helmet from "../components/Helmet";

class Register extends React.Component {
  render() {
    return (
      <>
      <Helmet title="Đăng Kí"/>
      <div className="register-page">
        <h1 className="w3ls">Official Signup Form</h1>
        <div className="content-w3ls">
          <div className="content-agile1">
            <h2 className="agileits1">Official</h2>
            <p className="agileits2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="content-agile2">
            <form action="#" method="post">
              <div className="form-control w3layouts">
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="First Name"
                  title="Please enter your First Name"
                  required
                />
              </div>
              <div className="form-control w3layouts">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="mail@example.com"
                  title="Please enter a valid email"
                  required
                />
              </div>
              <div className="form-control agileinfo">
                <input
                  type="password"
                  className="lock"
                  name="password"
                  placeholder="Password"
                  id="password1"
                  required
                />
              </div>
              <div className="form-control agileinfo">
                <input
                  type="password"
                  className="lock"
                  name="confirm-password"
                  placeholder="Confirm Password"
                  id="password2"
                  required
                />
              </div>
              <input
                type="submit"
                className="register"
                defaultValue="Register"
              />
            </form>
            <p className="wthree w3l">
              Fast Signup With Your Favourite Social Profile
            </p>
            <ul className="social-agileinfo wthree2">
              <li>
                <a href="/#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAc1JREFUSEvFlu0xBUEQRe+LABEgAkSACBABGSgRIAIlAkSACBABGSADIqCO2t2aHT09PfPn9a/3Mbunb3/OQkuyxZK46gHvSVqRtD04/SbpS9JLi4goGMippENJqwUA8AdJ15JwxrUaGMiVpJPai7L/byWdDZEwH/XAqLyXtNEIHY9/SDoqqS+BgT45YY36Qvj3LbgFJryvQaWfQ14BjEbx7SbfUb6Th90Ck5/jgCSK6MLII7+dZ8/f5XWSgwkxamtG66DMMgvMuU1JqP+zHBxVS9HQOqnhyM+gzOqCmeocTK4YDjUjZ2mv4sRB5SHevWYpxmMqOWK5wyiNGBX+nIeaqUTfRqwXPKUofUGpKCxHesGXQyfMissDe1WcO+bl2wRTiTeFOLeAKbqtwnvMUHvF1QL2Cm3qhmg70fj0+GiELDXSNAL5bNl3Ovt7B0hPcbkDhBX4HuinHrA7MmFGplAruLokALMWqcx1R3kLmNXJ8klXZ/Gyx0FGW2luR8EUFN3y7w5Wu/oQdkt5BIxSxrB58Ytc9mijfPPUwI/DepyFN01dDTyepdrpTxQQfgtMWIkQ56aFX6qTKDh9nvzn4bN+c7uyBxxo8/qRpYF/ATESYx8MOAMfAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAATFJREFUSEvtVu0RwUAU3FSACuiADtABHeiADlCBEugAFaADHaADJZjNXMzlhGxO4vLDm8kkmdn3Nvs+7iVCIIsC8eJP/LPM1y7VAwB9Sz7fVbsC4EW7AzgDOLnOruIegC2Ajsoi4kg+tj7opauPjlIxrgRj7GGCtBVT5UUK4Q9qmfSnFLOOB/+YkicVU3mKeAJgLbjvTQ90BawLYZ13LvECwFwItgRA7MzcG4JPAkl8U4qLEjNY05BPRfLSiBM+NuZGmIhKiNkfeQdNacRMNdPMMilWCjGnYGXqrJASk0msjhPHgTXl8VrUMuc42AES7Mhk2qpcElyNz67PWousYbto8XLwNwAjs5tj6Ls/EH6ZPZNsJI6OavEiMMZn+/0jsUrgjavdP5e3EtXxr1jN1Ne4B323OB8cG9DtAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAapJREFUSEvtlv0xBEEQxd9FQAZkgAgQASJwIkAEiAARIAJE4GRABkIgAuqnerbm5mZnenaV++e6auvu6t706379MTvRkmyyJF6tiP9N+b+Qel3SqaQ9ez4k3Uu6lfRpmWza9/B7ocY4eZR0FB0qqYDDF0l8phYCOJT0ZUF1mDRjQBA/GXlN+pmk3QroXRJ+CQ78r6XEl5Iu7D9A55LeehwjLdnWDHnhAd/5SolzzggmrlcgOpN0XWONZJ5LINdc3xlnRI38PK9W/1idEv+VJLBzliOeSrpzZELz5JoqPeoiRr4NSdtpFzoC6YOc2HgVM/Y2TEscO7kGTaVmjpFwrcVzAcv84nPBxtTYE9uzzbCLGBA1phMPPN4LmP14acS4vl1Nk0FKzYcaY9d7vo+YMWHgx9Q621Qhi9LthNyszSHkrNqbklS1a5GOZKEQxLFT8wc7U4R7iLk0qLnHXKQ4ionJbsvmjgzD9srOYRIF80pwvAC4LHc7MUa1OzY4hxAyznRvFx7mUleH2pJxCIRLHQK2W7itPDzuBTLIWcuhWnO1+GrCroib5BoD/gFW7UcfC0psiQAAAABJRU5ErkJggg=="
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="/#">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAXxJREFUSEvtluExBEEQRt9FQAaEQATIQAaEQASIgBCIABEgAkSACBAB9aq2r/qmZrdu1pX7s111dfdjpr/p11/P3Iw1xWxNukzC/0Z+Ql2i3gb2AL+NL+AeeP9rT/pQbwKXwHGPwCNwCryMPUBNeAd4ABQfio9Eolm/FFbsrRAVbVQm8iPgtaMxVLG0toAnQEILUQpfd4ld9A3sV3BKxB7b76FQTH9cAOdDwlb7mRYc1E7awHRp4UPgtkssSivLYfU/PcKul0DgdZm/bY0HCNRz7Bm1OM66xDU8faJuCTpRZR+Yed5VC18lUhLbAHR/zL0e8rPwOmXUunW3OHZpkJMuca44b1m6xy3msprnpFK7D5YWNk8eJ81i78pZ1TCaMMx303PDBfY53oyjdoHYD3sTcdeJexDFbEncas56zHXDpC32ODaaSExZvJZUUUfGgzXH0CMhKq/HWjiPmmulj0QWEqlo87MojdGCkXz6B9JskrEbJtRjyTXvWxvqXxJIUh8cOwDxAAAAAElFTkSuQmCC"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="clear" />
        </div>
      </div>
      </>
    );
  }
}
export default Register;
