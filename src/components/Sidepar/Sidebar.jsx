import "./sidebar.scss"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebar-container">
          <div>
            <h2 className="rounded-number">1</h2>
            <div className="hide-on-mobile">Step 1 Your info</div>
          </div>

          <div>
            <h2 className="rounded-number">2</h2>
            <div className="hide-on-mobile">Step 2 Select plan</div>
          </div>
          <div>
            <h2 className="rounded-number">3</h2>
            <div className="hide-on-mobile">Step 3 Add-ons</div>
          </div>
          <div>
            <h2 className="rounded-number">4</h2>
            <div className="hide-on-mobile">Step 4 Summary</div>
          </div>
        </div>
      </div>
  )
}
