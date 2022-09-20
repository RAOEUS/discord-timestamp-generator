import React from 'react'
import './App.css'
import moment from 'moment/moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [dateTime, setDateTime] = React.useState();

  const notify = (e) => {
    console.log(e)
    toast(`Copied ${e.target.textContent} to clipboard!`, {
      position: "bottom-left",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined
    });
  }


  const getDiscordString = (type) => {
    const timeStamp = moment(dateTime).format('X')
    let string;
    switch (type) {
      case 'default':
        string = `<t:${timeStamp}>`;
        break;
      case 'shortTime':
        string = `<t:${timeStamp}:t>`;
        break;
      case 'longTime':
        string = `<t:${timeStamp}:T>`;
        break;
      case 'shortDate':
        string = `<t:${timeStamp}:d>`;
        break;
      case 'longDate':
        string = `<t:${timeStamp}:D>`;
        break;
      case 'shortDateTime':
        string = `<t:${timeStamp}:f>`;
        break;
      case 'longDateTime':
        string = `<t:${timeStamp}:F>`;
        break;
      case 'relativeTime':
        string = `<t:${timeStamp}:R>`;
        break;
      default:
        string = "";
        break;
    }
    return string;
  }

  return (
    <>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div id="main">
        <div id="inner">
          <h1>Discord Timestamp Generator</h1>
          <form>
            <div className="input-group">
              <input type="datetime-local" name="dateTime" id="dateTime" onChange={(e) => { setDateTime(e.target.value) }} />
            </div>
          </form>
          {dateTime &&
            <div id="results">
              <table>
                <tr>
                  <th>Style</th>
                  <th>Syntax (click to copy)</th>
                  <th>Output (12-hour-clock)</th>
                  <th>Output (24-hour-clock)</th>
                </tr>
                <tr>
                  <td>Default</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('default')) }}>{getDiscordString('default')}</button></td>
                  <td>{moment(dateTime).format('MMMM D YYYY, h:mm A')}</td>
                  <td>{moment(dateTime).format('MMMM D YYYY, HH:mm')}</td>
                </tr>
                <tr>
                  <td>Short Time</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('shortTime')); notify(e); }}>{getDiscordString('shortTime')}</button></td>
                  <td>{moment(dateTime).format('h:mm A')}</td>
                  <td>{moment(dateTime).format('HH:mm')}</td>
                </tr>
                <tr>
                  <td>Long Time</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('shortTime')); notify(e); }}>{getDiscordString('longTime')}</button></td>
                  <td>{moment(dateTime).format('h:mm:ss A')}</td>
                  <td>{moment(dateTime).format('HH:mm:ss')}</td>
                </tr>
                <tr>
                  <td>Short Date</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('shortDate')); notify(e); }}>{getDiscordString('shortDate')}</button></td>
                  <td>{moment(dateTime).format('M/D/YYYY')}</td>
                  <td>{moment(dateTime).format('D/M/YYYY')}</td>
                </tr>
                <tr>
                  <td>Long Date</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('longDate')); notify(e); }}>{getDiscordString('longDate')}</button></td>
                  <td>{moment(dateTime).format('MMMM D, YYYY')}</td>
                  <td>{moment(dateTime).format('D MMMM YYYY')}</td>
                </tr>
                <tr>
                  <td>Short Date/Time</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('shortDateTime')); notify(e); }}>{getDiscordString('shortDateTime')}</button></td>
                  <td>{moment(dateTime).format('MMMM D, YYYY h:mm A')}</td>
                  <td>{moment(dateTime).format('D MMMM YYYY HH:mm A')}</td>
                </tr>
                <tr>
                  <td>Long Date/Time</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('longDateTime')); notify(e); }}>{getDiscordString('longDateTime')}</button></td>
                  <td>{moment(dateTime).format('dddd, MMMM D, YYYY h:mm A')}</td>
                  <td>{moment(dateTime).format('dddd, D MMMM YYYY HH:mm A')}</td>
                </tr>
                <tr>
                  <td>Relative</td>
                  <td><button className="rainbow-button" onClick={(e) => { navigator.clipboard.writeText(getDiscordString('relativeTime')); notify(e); }}>{getDiscordString('relativeTime')}</button></td>
                  <td>Example: 3 days from now</td>
                  <td>Example: 3 days from now</td>
                </tr>
              </table>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default App