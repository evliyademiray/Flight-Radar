import React from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import { useState } from "react";

const Listview = ({ openModal }) => {
  const state = useSelector((store) => store.flight);
  const [itemOffset, setItemOffset] = useState(0);

  //Sayfa başına eleman sayısı
  const itemsPerPage = 10;

  //Gösterilecek sonuncu elemanın dizideki yeri
  const endOffset = itemOffset + itemsPerPage;

  //Belirlenen aralıkta elemanları seçme
  const currentItems = state.flights.slice(itemOffset, endOffset);

  //Toplam sayfa sayısını bulma
  const pageCount = Math.ceil(state.flights.length / itemsPerPage);

  // Her yeni sayfa seçtiğinde bunu state'e aktarır.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % state.flights.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-hover mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => openModal(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="Ileri >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Geri"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Listview;
