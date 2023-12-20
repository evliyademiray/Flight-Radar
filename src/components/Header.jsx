import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const state = useSelector((store) => store.flight);
  return (
    <header>
      <div>
        <img src="/plane-l.png" />
        <h3>Uçuş Radarı</h3>
      </div>
      <p>
        {state.isLoading
          ? "Uçuşlar Hesaplanıyor..."
          : state.isError
          ? "Hata oluştu"
          : state.flights.length + " Uçuş bulundu"}
      </p>
    </header>
  );
};

export default Header;
