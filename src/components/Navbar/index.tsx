import { Avatar, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import "./navbar.css";

export const Navbar = () => {
  const items = [
    { key: 1, label: "Overview" },
    { key: 2, label: "Patients" },
    { key: 3, label: "Schedule" },
    { key: 4, label: "Messages" },
    { key: 5, label: "Transactions" },
  ];

  return (
    <Header
      style={{
        position: "sticky",
        margin: "16px 16px 8 px 16px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "50px",
        backgroundColor: "white",
        height: "55px",
        padding: "0 10px",
      }}
    >
      <div className="header-logo">
        <img src=".\public\assets\TestLogo.svg" alt="" />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={items}
        style={{ minWidth: 0, backgroundColor: "white" }}
      />

      <div className="header-user">
        <div className="header-user-current">
          <div>
            <Avatar
              size={"large"}
              src={
                "./public/assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png"
              }
            />
          </div>
          <div className="header-user-current-details">
            <p className="header-user-current-name">Dr.Jose Simmons</p>
            <p className="header-user-current-title">General Practitioner</p>
          </div>
        </div>
        <div className="header-user-options">
          <div className="header-user-options-settings">
            <img
              src=".\public\assets\settings_FILL0_wght300_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
          <div className="header-user-options-more">
            <img
              src=".\public\assets\more_vert_FILL0_wght300_GRAD0_opsz24.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Header>
  );
};
