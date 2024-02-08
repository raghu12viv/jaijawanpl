import React from 'react'

export default function MainPageContact() {
  return (
    <>
        <div className="contact-container">
        <div>
          <div>
            <div>
              <div className="contact-title">
                <h2> Contact Us </h2>
                <hr />
                {/* <?php 
                          $Msg = "";
                          if(isset($_GET['error']))
                          {
                              $Msg = " Please Fill in the Blanks ";
                              echo '<div className="alert alert-danger">'.$Msg.'</div>';
                          }

                          if(isset($_GET['success']))
                          {
                              $Msg = " Your Message Has Been Sent ";
                              echo '<div className="alert alert-success">'.$Msg.'</div>';
                          }
                      
                      ?> */}
              </div>
              <div className="contact-body">
                <form action="mail.php" method="post" autoComplete="off">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" name="name" placeholder="Your Name" />

                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" placeholder="Email" />

                  <label htmlFor="message">Message</label>
                  <textarea name="message" placeholder="Message"></textarea>

                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
