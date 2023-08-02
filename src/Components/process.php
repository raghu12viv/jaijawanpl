<?php 
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
                      
                      ?>