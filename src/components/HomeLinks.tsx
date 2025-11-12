'use client';

export default function HomeLinks() {
  return (
    <div className="list">
      <a href="/shop">
        <div className="list-items item1">
          <h3>Shop</h3>
        </div>
      </a>
      <a href="/archive" id="retrospective">
        <div className="list-items item2">
          <h3>Archive</h3>
        </div>
      </a>
      <a href="/contact">
        <div className="list-items item3">
          <h3>Contact</h3>
        </div>
      </a>
    </div>
  );
}
