import React, { useEffect } from "react";
import Pagination from "react-bootstrap/Pagination";

const CustomPagination = (props: {
  total: number;
  perPage: number;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  let items = [];
  let pages =
    props.total % props.perPage
      ? props.total / props.perPage + 1
      : props.total / props.perPage;

  for (let index = 1; index < pages; index++) {
    items.push(
      <Pagination.Item
        key={index}
        active={index === props.page}
        onClick={() => {
          props.setPage(index);
        }}
      >
        {index}
      </Pagination.Item>
    );
  }

  props.page > items.length && props.setPage(1);
  useEffect(() => {}, [props]);

  return (
    <div>
      <Pagination>{items}</Pagination>
    </div>
  );
};

export default CustomPagination;
