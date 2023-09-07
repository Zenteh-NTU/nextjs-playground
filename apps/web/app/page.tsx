export default function Page(): JSX.Element {

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Theme switcher</h1>
      <div className="flex flex-col">
        <button className="btn mt-12" type="button">
          Button
        </button>
        <button className="btn btn-neutral" type="button">
          Neutral
        </button>
        <button className="btn btn-primary" type="button">
          Primary
        </button>
        <button className="btn btn-secondary" type="button">
          Secondary
        </button>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
