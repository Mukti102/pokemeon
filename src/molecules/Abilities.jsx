import React, { useEffect, useState } from "react";
import Range from "../atoms/Range";
import { baseUrl, globalUrl } from "../utils/apiRes";
import { fetchApi } from "../utils/Fetch";
import axios from "axios";
function Abilities({ stats }) {
  return (
    <div className="w-full">
      {stats?.map((item, index) => {
        return (
          <Range
            percent={`${item.base_stat}`}
            label={item?.stat?.name}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Abilities;
