import React from 'react'
import Rule from '/project/baazi/src/pages/Rule.jpg'
import styled from 'styled-components';
import { mobile , Tablet , Desktop } from './Responsive';


const Bodybox = styled.div`
     margin-left: 50px;
    margin-right: 50px;
   /* width: 790px; */
    padding-left: 50px;
    padding-right: 50px;
    ${mobile({margin: 0 , padding: 0,})};

`;

const BannerImg = styled.div`

`;
const Menu = styled.nav`
    background: #0099CC;
    background: linear-gradient(to bottom, #41F95D, #00B81C);
    color: #FFF;
    height: 45px;
    padding-left: 18px;
    border-radius: 0px;

`;
const Navbar = styled.div`
display: flex;
justify-content: space-between;
`;
const Div1 = styled.div`
background: #05090a;
border: 5px solid orange;
border-radius: 15px;
margin-top: 10px;
`;
const Div2 = styled(Div1)`
`;
const Div3 = styled(Div1)`

`;
const Div4 = styled(Div1)`
`;
const Div5 = styled(Div1)`
`;
const Div6 = styled(Div1)`
`;
const Div7 = styled(Div1)`
`;
const Div8 = styled(Div1)`
`;


const home = () => {
  return (
    <Bodybox>
      <Div1>
        <h1 className="text-center bg-dark text-white ">
          কিভাবে একাউন্ট খুলবেন ? </h1>
        
        <p  className="bg-dark text-white ">
          কিভাবে একাউন্ট খুলবেনঃ www.winx365.info/ এ একাউন্ট করতে হলে আপনার এজেন্ট এর মাধ্যমে একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলবেন তার সাথেই সব সময় লেনদেন করতে হবে। আপনি কিভাবে তার সাথে লেনদেন করবেন আপনার এজেন্ট আপনাকে বলে দিবে। এজেন্ট লিস্ট চেক না করে লেনদেন করলে সমস্ত দায়ভার আপনাকেই বহন করা লাগবে। একাউন্ট খুলতে কি কি প্রয়োজন- আপনি যদি বিকাশ/নগদ/রকেটের মাধ্যমে লেনদেন করতে চান তাহলে অবশ্যই www.winx365.info/ এই সাইটটিতে আপনাকে আমন্ত্রণ জানাচ্ছি।
          ★আপনার নাম
          ★আপনার ইমেইল আইডি (যদি থাকে আর না থাকলে এজেন্ট বানিয়ে দিবে)
          ★আপনার ফোন নাম্বার </p>
        
      </Div1>

      <Div2 >
        <h1 className=" text-center bg-dark text-white ">
          এজেন্ট লিস্টঃ </h1>        
        <p  className="bg-dark text-white ">
          একাউন্ট খুলতে নিম্নে অনলাইন এজেন্ট লিস্ট এ ক্লিক করুন। এজেন্ট লিস্টে যাদের নাম আছে – তাদের ফেসবুক লিঙ্ক এর উপরে ক্লিক করলে ফেসবুক আইডি আসবে অথবা ফেসবুক আইকন এর উপরে ক্লিক করলে ফেসবুক এপ দিয়ে আইডি ওপেন হবে। এই সব এজেন্ট এর নামে ডুপ্লিকেট বা ফেইক আইডি থাকতে পারে। তাই এই সব এজেন্ট দের নাম ফেইসবুকে সার্চ না করে – লিঙ্ক এ ক্লিক করে যোগাযোগ করুন। অনলাইন মাষ্টার এজেন্ট লিস্টঃ </p>        
      </Div2>
      <Div3>
        <h1 className="text-center bg-dark text-white ">
          এজেন্ট কয় প্রকারঃ       </h1>
        <p className="bg-dark text-white ">
          অনলাইন সুপার এজেন্ট লিস্টঃ সুপার এজেন্ট রা, ইউজার একাউন্ট এবং মাষ্টার এজেন্ট একাউন্ট খুলে দিতে পারেন। কোন সুপার এজেন্ট এর নামে অভিযোগ থাকলে – সরাসরি এডমিন কে জানাতে হবে। উপরে মেনু তে এডমিন লিষ্ট দেয়া আছে।       </p>
        <p className="bg-dark text-white ">
          অনলাইন মাষ্টার এজেন্ট লিস্টঃ অনলাইন মাষ্টার এজেন্ট রা, শুধু ইউজার একাউন্ট একাউন্ট খুলে দিতে পারেন। কোন মাষ্টার এজেন্ট এর নামে অভিযোগ থাকলে – সরাসরি সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। মাষ্টার এজেন্ট এর নামের পাশে সুপার এজেন্ট দের নাম লিখা আছে।        </p>
        <p className="bg-dark text-white ">
          লোকাল মাষ্টার এজেন্ট লিস্টঃ লোকাল মাষ্টার এজেন্টরা শুধু ইউজার একাউন্ট খুলে দিতে পারেন। কিন্তু তাদের সাথে লেনদেন প্রতিটি ইউজারকে নিজ দায়িত্বে লেনদেন করতে হবে।তাদের নামে কোন অভিযোগ কারো কাছে করা যাবে না। লোকাল মাষ্টার এজেন্ট সাধারণত– নিজের এলাকায় বা পরিচিতদের সাথে লেনদেন করে ।যারা আগে বাজি ধরিয়ে দিত,তাদের কেই মূলত লোকাল এজেন্ট দেয়া হয়েছে। লোকাল এজেন্টরা অনলাইনে আসে না এবং তারা তাদের পরিচয় গোপন রাখতে চায়।লোকাল এজেন্টদের সাথে অনলাইনে কোন ভাবেই লেনদেন করবেন না,আর করে থাকলে তার দায়ভার পুরোটাই আপনার।       </p>

      </Div3>
      <Div4>
        <h1 className="text-center bg-dark text-white ">
          এজেন্ট হওয়ার নিয়ম এবং শর্ত সমূহঃ        </h1>
        <p className="bg-dark text-white ">
          ★সুপার এজেন্ট শুধু মাত্র এডমিন দিতে পারে।
          ★মাষ্টার এজেন্ট শুধু মাত্র সুপার এজেন্টরা দিতে পারে।
          সুপার এজেন্ট নিতে এডমিন এবং অনলাইন-লোকাল এজেন্ট নিতে সুপার এজেন্টদের সাথে যোগাযোগ করুন।
        </p>
      </Div4>
      <Div5>
        <h1 className="text-center bg-dark text-white ">
          পয়েন্ট কেনা-বেচাঃ       </h1>
        <p className="bg-dark text-white ">
          ★এজেন্ট উপরক্ত সাইট থেকে ১ PBU কিনবে ৭৫ টাকা করে।
          ★এজেন্ট ইউজার এর কাছে বিক্রি করবে ১০০ টাকা করে।
          ★এইখানে এজেন্ট এর লাভ থাকবে প্রতি PBU তে ২৫ টাকা।
          ★এজেন্ট ইউজার এর কাছ থেকে পয়েন্ট কিনবে প্রতি পয়েন্ট ১০০ টাকা করে।
          ★এজেন্ট উপরক্ত সাইট এর কাছে বিক্রি করবে প্রতি পয়েন্ট ৭৫ টাকা করে।
          এইখানে এজেন্ট এর লস হবে ২৫ টাকা কিন্তু এইখানে কথা আছে
          প্রথম ২ মাসের মধ্যে এজেন্ট উপরক্ত সাইট থেকে যত পয়েন্ট কিনবে তার থেকে যদি বিক্রি বেশি হয় – এই ২৫ টাকা লসের মধ্যে ১০% এর দায়ভার উপরক্ত সাইট নিবে।
        </p>


      </Div5>
      <Div6>
        <h1 className="text-center bg-dark text-white ">
          শর্ত সমূহঃ
        </h1>
        <p className="bg-dark text-white ">
          🎯**এজেন্ট কে ৪০ হাজার টাকার পয়েন্ট কিনে এজেন্ট শুরু করতে হবে।
          🎯**ইউজার ব্যালেন্স বাদ দিয়ে এজেন্ট এর ব্যালেন্স সবসময় ২৫০ পয়েন্ট থাকতে হবে।
          🎯**এজেন্ট এর ব্যালেন্স যদি ৫০০ বা তার বেশি পয়েন্ট হয়ে যায় তাহলে এজেন্ট ২০০ বা তার বেশি পয়েন্ট বিক্রি করতে পারবে।
          🎯** এজেন্ট এর কাছে সর্বনিম্ন ২০-৩০ জন একটিভ ইউজার থাকতে হবে।
          🎯 ইউজারদের সব ধরনের হেল্প সাপোর্ট দিতে হবে।
          🎯 কোন এজেন্ট এর বিরুদ্ধে অভিযোগ প্রমাণিত হলে সাথে সাথে এজেন্টশীপ বাতিল বলে গন্য হবে।
          বিশেষ সতর্কতাঃ ইউজার উইথড্র চাহিবার মাত্রই সঠিক সময়ে টাকা দিতে হবে।
        </p>
        <p className="bg-dark text-white ">
          একটা বিষয় অবগত করা দরকার। এজেন্ট এর যদি নিজে খেলার অভ্যাস থাকে তাহলে – এজেন্ট হউয়া থেকে বিরত থাকুন। এজেন্ট যদি কখনো নিজে খেলতে গিয়ে ধরা পরেন – তাহলে এজেন্ট একাউন্ট ঐ অবস্থায় সঙ্গে সঙ্গে ব্লক হয়ে যাবে এবং সমস্ত লেনদেন বন্ধ হয়ে যাবে। যদি এজেন্ট নিজে কোন আইডি তে বাজি ধরিয়ে দিতে চান – তাহলে http://winx365.live কে আগেই সেই আইডির বিষয়ে জানাতে হবে।
        </p>
      </Div6>

      <Div7>
        <h1 className="text-center bg-dark text-white ">সোশাল মিডিয়াঃ</h1>
        <p className="bg-dark text-white ">
        আমাদের সম্পর্কে জানতে জয়েন হতে পারেন আমাদের ফেসবুক গ্রুপ এ । অথবা আমাদের সম্পর্কে আরো নিত্য নতুন আপডেট পেতে জয়েন হতে পারেন আমাদের সিক্রেট গ্রুপে।
        </p>
      </Div7>

      <Div8>
        <h1 className=" text-center bg-dark text-white ">রুলসঃ</h1>
        <img src={Rule} alt="banner" width="100%" />
      </Div8>

    </Bodybox>
  )
}

export default home
