'use client';

import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function SizeGuideButton() {
  const [isOpen, setIsOpen] = useState(false);
  const sizeGuideRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section
        id="close-size-id"
        className={`
                size-guide-section
                ${isOpen ? 'translate-x--0' : 'translate-x--101'}`}
        ref={sizeGuideRef}
      >
        <div className="size-guide-close-btn-wrap" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faXmark} className="size-guide-close-icon" />
        </div>
        <div className="size-guide-table-wrap">
          <h1>Size Chart</h1>
          <table
            className="sizeChart"
            border={0}
            cellPadding={10}
            cellSpacing={0}
            width="100%"
          >
            <thead>
              <tr>
                <td>American</td>
                <td>Alphabetical</td>
                <td>JBL UK</td>
                <td>Bust</td>
                <td>Waist</td>
                <td>Hips</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>XXS</td>
                <td>6</td>
                <td>32</td>
                <td>24¾</td>
                <td>34¾</td>
              </tr>
              <tr>
                <td>4</td>
                <td>XS</td>
                <td>8</td>
                <td>34</td>
                <td>26¾</td>
                <td>36¾</td>
              </tr>
              <tr>
                <td>6</td>
                <td>S</td>
                <td>10</td>
                <td>36</td>
                <td>28¾</td>
                <td>38¾</td>
              </tr>
              <tr>
                <td>8</td>
                <td>M</td>
                <td>12</td>
                <td>38</td>
                <td>30¾</td>
                <td>40¾</td>
              </tr>
              <tr>
                <td>10</td>
                <td>L</td>
                <td>14</td>
                <td>40</td>
                <td>32¾</td>
                <td>42¾</td>
              </tr>
              <tr>
                <td>12</td>
                <td>XL</td>
                <td>16</td>
                <td>43</td>
                <td>35¾</td>
                <td>45¾</td>
              </tr>
              <tr>
                <td>14</td>
                <td>XXL</td>
                <td>18</td>
                <td>45</td>
                <td>37¾</td>
                <td>47¾</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <div className="size-guide-button">
        <p onClick={toggleMenu}>Click here to see size guide</p>
      </div>
    </>
  );
}

export default SizeGuideButton;
