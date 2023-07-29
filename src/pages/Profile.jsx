function Profile() {
  return (
    <>
      <div className="profile_header">
        <div className="profile_details">
          <div className="details_col_1">
            <div className="profile_image">
              <img src="../public/profile_photo.avif" alt="" />
            </div>
            <div className="profile_location">
              <div className="profile_name">Sevana</div>
              <div className="location">
                <div className="location_icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="location_name">Bakı</div>
              </div>
            </div>
          </div>
          <div className="details_col_2">
            <button className="edit_btn">
              <div className="edit_icon">
                <i className="fa-regular fa-pen-to-square"></i>
              </div>
              <span className="editProfile">Edit profile</span>
            </button>

            <div className="followers_details">
              <div className="reviews">
                <p>0</p>
                <span>Reviews</span>
              </div>
              <div className="reviews photos">
                <p>0</p>
                <span>Photos</span>
              </div>
              <div className="reviews followers">
                <p>0</p>
                <span>Followers</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile_demo">
        <div className="demo_col_1">
          <div className="activity">
            <h4>ACTIVITY</h4>
            <div className="list">
              <a href="#">Reviews</a>
              <a href="#">Photos</a>
              <a href="#">Followers</a>
              <a href="#">Recently Viewed</a>
              <a href="#">Bookmarks</a>
              <a href="#">Blog Posts</a>
            </div>
          </div>

          <div className="activity">
            <h4>ONLINE ORDERING</h4>
            <div className="list">
              <a href="#">Order History</a>
              <a href="#">My Addresses</a>
              <a href="#">Favorite Orders</a>
            </div>
          </div>

          <div className="activity">
            <h4>PAYMENTS</h4>
            <div className="list">
              <a href="#">Zomato Credits</a>
              <a href="#">Manage Wallets</a>
              <a href="#">Manage Cards</a>
            </div>
          </div>

          <div className="activity">
            <h4>Table Booking</h4>
            <div className="list">
              <a href="#">Your Bookings</a>
            </div>
          </div>

          <div className="activity">
            <h4>Suggested foodies to follow</h4>

            <div className="list">
              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw1.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Charanjeev Grover</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 118 Reviews</span>
                      <span className="rws_count"> 1.1K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw2.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Gurpreet Singh Tikku</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 54 Reviews</span>
                      <span className="rws_count"> 1.5K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw3.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Dharna</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 288 Reviews</span>
                      <span className="rws_count"> 3.0K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw4.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Hansika Khurana</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 169 Reviews</span>
                      <span className="rws_count"> 4.6K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw5.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Khana Yahin Milega</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 218 Reviews</span>
                      <span className="rws_count"> 1.9K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw6.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Debidutt</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 145 Reviews</span>
                      <span className="rws_count"> 2.0K Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>

              <div className="followers_about">
                <div className="profileandname">
                  <div className="followerPhoto">
                    <img src="../public/flw7.avif" alt="" />
                  </div>
                  <div>
                    <p className="flwname">Sumneet Kaur</p>
                    <div className="rws_flw">
                      <span className="rws_count"> 195 Reviews</span>
                      <span className="rws_count"> 648 Followers</span>
                    </div>
                  </div>
                </div>
                <div className="useradd">
                  <i className="fa-solid fa-user-plus"></i>
                  <i className="fa-solid fa-user-check"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="activity">
            <h4>ZOMATO PROFILE WIDGET</h4>
            <div className="list">
              <p className="widgettext">
                Showcase your Zomato profile on your blog
              </p>
              <img
                className="../public/userwidget"
                src="../public/user_widget_img.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;

// function Profile() {
//     return (
//       <>
//         <div className="profile_header">
//           <div className="profile_details">
//             <div className="details_col_1">
//               <div className="profile_image">
//                 <img src="profile_photo.avif" alt="" />
//               </div>
//               <div className="profile_location">
//                 <div className="profile_name">Sevana</div>
//                 <div className="location">
//                   <div className="location_icon">
//                     <i className="fa-solid fa-location-dot"></i>
//                   </div>
//                   <div className="location_name">Bakı</div>
//                 </div>
//               </div>
//             </div>
//             <div className="details_col_2">
//               <button className="edit_btn">
//                 <div className="edit_icon">
//                   <i className="fa-regular fa-pen-to-square"></i>
//                 </div>
//                 <span className="editProfile">Edit profile</span>
//               </button>

//               <div className="followers_details">
//                 <div className="reviews">
//                   <p>0</p>
//                   <span>Reviews</span>
//                 </div>
//                 <div className="reviews photos">
//                   <p>0</p>
//                   <span>Photos</span>
//                 </div>
//                 <div className="reviews followers">
//                   <p>0</p>
//                   <span>Followers</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="profile_demo">
//           <div className="demo_col_1">
//             <div className="activity">
//               <h4>ACTIVITY</h4>
//               <div className="list">
//                 <a href="#">Reviews</a>
//                 <a href="#">Photos</a>
//                 <a href="#">Followers</a>
//                 <a href="#">Recently Viewed</a>
//                 <a href="#">Bookmarks</a>
//                 <a href="#">Blog Posts</a>
//               </div>
//             </div>

//             <div className="activity">
//               <h4>ONLINE ORDERING</h4>
//               <div className="list">
//                 <a href="#">Order History</a>
//                 <a href="#">My Addresses</a>
//                 <a href="#">Favorite Orders</a>
//               </div>
//             </div>

//             <div className="activity">
//               <h4>PAYMENTS</h4>
//               <div className="list">
//                 <a href="#">Zomato Credits</a>
//                 <a href="#">Manage Wallets</a>
//                 <a href="#">Manage Cards</a>
//               </div>
//             </div>

//             <div className="activity">
//               <h4>Table Booking</h4>
//               <div className="list">
//                 <a href="#">Your Bookings</a>
//               </div>
//             </div>

//             <div className="activity">
//               <h4>Suggested foodies to follow</h4>

//               <div className="list">
//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw1.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Charanjeev Grover</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 118 Reviews</span>
//                         <span className="rws_count"> 1.1K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw2.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Gurpreet Singh Tikku</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 54 Reviews</span>
//                         <span className="rws_count"> 1.5K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw3.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Dharna</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 288 Reviews</span>
//                         <span className="rws_count"> 3.0K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw4.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Hansika Khurana</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 169 Reviews</span>
//                         <span className="rws_count"> 4.6K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw5.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Khana Yahin Milega</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 218 Reviews</span>
//                         <span className="rws_count"> 1.9K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw6.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Debidutt</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 145 Reviews</span>
//                         <span className="rws_count"> 2.0K Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>

//                 <div className="followers_about">
//                   <div className="profileandname">
//                     <div className="followerPhoto">
//                       <img src="flw7.avif" alt="" />
//                     </div>
//                     <div>
//                       <p className="flwname">Sumneet Kaur</p>
//                       <div className="rws_flw">
//                         <span className="rws_count"> 195 Reviews</span>
//                         <span className="rws_count"> 648 Followers</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="useradd">
//                     <i className="fa-solid fa-user-plus"></i>
//                     <i className="fa-solid fa-user-check"></i>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="activity">
//               <h4>ZOMATO PROFILE WIDGET</h4>
//               <div className="list">
//                 <p className="widgettext">Showcase your Zomato profile on your blog</p>
//                 <img className="userwidget" src="user_widget_img.png" alt="" />
//               </div>
//             </div>
//           </div>

//         </div>
//       </>
//     );
//   }

//   export default Profile;
