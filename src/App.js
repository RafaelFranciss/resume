import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="Resume">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <div className="Contact">
            <Contact />
          </div>
          <div className="Experience">
          <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header-container">
      <h1>RAFAEL FRANCIS T. ACUÑA</h1>
      <h2><i>Senior Data Analyst</i></h2>
      <img
        src="https://scontent.fcrk1-4.fna.fbcdn.net/v/t1.15752-9/459171060_1178615020098376_1949619282150735658_n.png?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=MAA9APChjUMQ7kNvgHPcHRF&_nc_ht=scontent.fcrk1-4.fna&_nc_gid=AImIJWbdphrluYt-cwJL62t&oh=03_Q7cD1QFWR5sN3dz311xm--Cd0BbvFmm2N7cwQRhnkiWK40qVEQ&oe=67137D19" className="profile"/>
    </div>
  );
}

function Contact() {
  return (

    <div className="cont">
    <h1>CONTACT</h1>

    <div className="mail">
      <p className="email">rafaelacunaa.21@gmail.com</p>
      <img className="mail-pic" src="https://www.leedsot.co.uk/images/mail.png" width="18px"></img>
      </div>

      <div className="num">
      <p className="phone-number">+63 9615691188</p>
      <img className="num-pic" src="https://www.pngkey.com/png/full/648-6483874_phone-phone-icon-grey-png.png" width="17px"></img>
    </div>

    <div className="loc">
    <p className="location">City of San Fernando, Pampanga, Philippines</p>
  <img className="loc-pic" src="https://cdn3.iconfinder.com/data/icons/flat-pro-basic-set-1-1/32/location-gray-1024.png" width="20px"></img>
  </div>

  <div className="fb">
  <a href="https://www.facebook.com/rafael.acuna.1238292"><p className="facebook">Facebook</p></a>
  <img className="facebook-pic" src="https://www.warehousestoragesolutions.com/wp-content/themes/understrap-child-master/assets/img/facebook-icon.png" width="22px"></img>
  </div>

  <div className="ghub">
  <a href="https://github.com/RafaelFranciss"> <p className="github">Github</p></a>
  <img className="github-pic" src="https://icones.pro/wp-content/uploads/2021/06/icone-github-grise.png" width="22px"></img> 
  </div>

  <hr className="hr1"></hr>

    <div>
    <h1>EDUCATION</h1>
    </div>

    <div class="educ">
    <p>Bachelor of Science in Information Technology</p>
    <p>University of the Assumption</p>
    <p>2022-2026</p>
    <p>Del Pilar, CSFP</p>
    </div>

    <hr className="hr2"></hr>

    <div>
    <h1>SKILLS</h1>
    </div>
    
    <div class="skill">
      <p>•Database Management</p>
      <p>•Data Analysis</p>
      <p>•Web Development</p>
      <p>•Troubleshooting</p>
      <p>•Spreadsheets</p>
    </div>
    
</div>
  );
}

function Experience() {
  return (
    <div>
      <h1>WORK EXPERIENCE</h1>

    <div>
      <h2 className="sda">Senior Data Analyst</h2>
      <p className="smart">Smart Communications</p>
      <p className="smart-year">2037 - Current / CSFP, Pampanga</p>
      <ul className="smart-exp1">Directed the analysis of key performance metrics, resulting in a 30% improvement in operational efficiency across departments.</ul>
      <ul className="smart-exp2">Led initiatives to enhance data visualization standards, resulting in a 30% increase in clarity and usability of analytical reports, that improved stakeholder engagement.</ul>
      <ul className="smart-exp3">Guided a team that developed innovative data models, enhancing analytical capabilities and boosting overall project success rates by 25%.</ul>
      <ul className="smart-exp4">Orchestrated analytical projects that uncovered actionable insights, driving a 25% increase in efficiency across business operations.</ul>
    </div>
    <hr className="hr3"></hr>

    <div>
      <h2 className="jda">Junior Data Analyst</h2>
      <p className="bpi">BPI Bank</p>
      <p className="bpi-year">2030 - 2037 / CSFP, Pampanga</p>
      <ul className="bpi-exp1">Assisted in the automation of data collection processes, reducing manual workload by 25% and increasing data accuracy.</ul>
      <ul className="bpi-exp2">Created a real-time dashboard to track important metrics, facilitating quicker decision-making for executives and reducing response times by 30%.</ul>
      <ul className="bpi-exp3">Analyzed customer feedback data to identify areas for service improvement, leading to a 15% increase in customer satisfaction scores.</ul>
      <ul className="bpi-exp4">Developed risk assessment models based on data insights, enabling management to proactively address potential challenges and reduce project risks by 18%.</ul>
    </div>
    <hr className="hr3"></hr>

    <div>
    <h2 className="fsd">Full Stack Developer</h2>
      <p className="fl">Freelance</p>
      <p className="fl-year">2026 - 2030 / Worldwide</p>
      <ul className="fl-exp1">Designed and developed web applications that improved user satisfaction, leading to a 30% increase in customer engagement and retention for clients.</ul>
      <ul className="fl-exp2">Created and deployed web applications that elevated user experience, rising to a 20% boost in clients' business performance and sales.</ul>
      <ul className="fl-exp2">Developed a full stack web application that exceeded client expectations, resulting in a 95% referral rate within the industry.</ul>
      <ul className="fl-exp4">Achieved a 4.8/5 client satisfaction rating for delivering web applications that improved user experience.</ul>
    </div>

    </div>
  );
}