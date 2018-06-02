import React from 'react'
import Link from 'gatsby-link'
import './header.scss';

const Header = ({ siteTitle }) => (
  <div>
  <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark navbar__menu"
        data-spy="affix" data-offset-top="197">
    <div className='container-fluid'>
      <div className="navbar__logo">
        <Link to="/">
          <svg className="logotype">
              <path d="M30.319 38.894a1.711 1.711 0 0 1 .553 1.313 1.753 1.753 0 0 1-.535 1.318 2.255 2.255 0 0 1-1.625.518h-1.206v2.575h-.819v-6.237h2.025a2.278 2.278 0 0 1 1.607.513zm-2.812 2.5h1.205a1.416 1.416 0 0 0 1-.311 1.14 1.14 0 0 0 .329-.869q0-1.178-1.332-1.179h-1.203zm6.642-3.438v2.522a1.719 1.719 0 0 1 1.611-.883 1.863 1.863 0 0 1 1.368.545 2.091 2.091 0 0 1 .549 1.553v2.925h-.81v-2.79a1.606 1.606 0 0 0-.36-1.134 1.291 1.291 0 0 0-.994-.387 1.306 1.306 0 0 0-1 .387 1.594 1.594 0 0 0-.365 1.134v2.79h-.819v-6.66zm6.628 6.039a2.539 2.539 0 0 1-.679-1.845 2.492 2.492 0 0 1 .711-1.85 2.6 2.6 0 0 1 3.564 0 2.487 2.487 0 0 1 .711 1.845 2.428 2.428 0 0 1-.743 1.845 2.529 2.529 0 0 1-1.813.707 2.33 2.33 0 0 1-1.752-.7zm1.75.027a1.658 1.658 0 0 0 1.2-.5 1.847 1.847 0 0 0 .508-1.381 1.88 1.88 0 0 0-.486-1.377 1.6 1.6 0 0 0-1.184-.5 1.538 1.538 0 0 0-1.166.5 1.93 1.93 0 0 0-.468 1.381 1.981 1.981 0 0 0 .45 1.382 1.478 1.478 0 0 0 1.146.497zm6.642-.072h.675v.668h-.832a1.129 1.129 0 0 1-1.287-1.269v-3.006h-.639v-.666h.639v-1.224h.828v1.224h1.278v.666h-1.274v3.007a.651.651 0 0 0 .135.468.667.667 0 0 0 .477.134zm3.371.045a2.54 2.54 0 0 1-.68-1.845 2.492 2.492 0 0 1 .711-1.85 2.6 2.6 0 0 1 3.564 0 2.485 2.485 0 0 1 .711 1.845 2.43 2.43 0 0 1-.742 1.845 2.531 2.531 0 0 1-1.813.707 2.329 2.329 0 0 1-1.752-.7zm1.75.027a1.657 1.657 0 0 0 1.2-.5 1.847 1.847 0 0 0 .509-1.381 1.881 1.881 0 0 0-.486-1.377 1.6 1.6 0 0 0-1.183-.5 1.537 1.537 0 0 0-1.166.5 1.93 1.93 0 0 0-.468 1.381 1.979 1.979 0 0 0 .45 1.382 1.476 1.476 0 0 0 1.144.497zm5.373-.05a2.611 2.611 0 0 1-.675-1.854 2.527 2.527 0 0 1 .67-1.827 2.243 2.243 0 0 1 1.688-.7 2.026 2.026 0 0 1 1.1.3 1.942 1.942 0 0 1 .715.773v-.99h.828v5.067a2.223 2.223 0 0 1-.657 1.66 2.28 2.28 0 0 1-1.665.644 2.823 2.823 0 0 1-1.669-.468 1.7 1.7 0 0 1-.752-1.224h.8a1.221 1.221 0 0 0 .549.7 1.939 1.939 0 0 0 1.071.278 1.466 1.466 0 0 0 1.066-.418 1.571 1.571 0 0 0 .427-1.175V43.61a1.958 1.958 0 0 1-.715.787 2 2 0 0 1-1.1.3 2.2 2.2 0 0 1-1.682-.723zm3.011-.481a2.079 2.079 0 0 0 0-2.682 1.587 1.587 0 0 0-1.179-.5 1.612 1.612 0 0 0-1.179.485 1.779 1.779 0 0 0-.491 1.324 1.9 1.9 0 0 0 .5 1.359 1.607 1.607 0 0 0 2.354.018zm4.928-3.816v.843a1.539 1.539 0 0 1 1.5-.919v.855h-.216a1.3 1.3 0 0 0-.959.328 1.586 1.586 0 0 0-.328 1.139v2.7h-.817v-4.944zm4.283 4.3a2.613 2.613 0 0 1-.673-1.857 2.525 2.525 0 0 1 .671-1.827 2.241 2.241 0 0 1 1.688-.7 2.028 2.028 0 0 1 1.1.3 1.941 1.941 0 0 1 .715.773v-.99h.826v4.944h-.828V43.61a1.957 1.957 0 0 1-.715.787 2.005 2.005 0 0 1-1.1.3 2.206 2.206 0 0 1-1.685-.723zm3.011-.481a2.079 2.079 0 0 0 0-2.682 1.586 1.586 0 0 0-1.179-.5 1.612 1.612 0 0 0-1.179.485 1.78 1.78 0 0 0-.492 1.321 1.9 1.9 0 0 0 .5 1.359 1.607 1.607 0 0 0 2.354.018zm6.755-3.9a2.244 2.244 0 0 1 1.688.7 2.529 2.529 0 0 1 .673 1.824 2.609 2.609 0 0 1-.675 1.854 2.2 2.2 0 0 1-1.683.725 2 2 0 0 1-1.1-.3 2.025 2.025 0 0 1-.725-.787v3.348h-.819v-7.281h.819v.99a2.013 2.013 0 0 1 1.827-1.071zm-.157 4.4a1.564 1.564 0 0 0 1.179-.518 1.892 1.892 0 0 0 .488-1.358 1.785 1.785 0 0 0-.49-1.328 1.613 1.613 0 0 0-1.179-.485 1.588 1.588 0 0 0-1.18.5 2.072 2.072 0 0 0 0 2.677 1.579 1.579 0 0 0 1.18.515zm5.8-6.039v2.523a1.719 1.719 0 0 1 1.611-.883 1.865 1.865 0 0 1 1.368.545 2.094 2.094 0 0 1 .549 1.553v2.925h-.81v-2.79a1.61 1.61 0 0 0-.359-1.134 1.293 1.293 0 0 0-1-.387 1.307 1.307 0 0 0-1 .387 1.6 1.6 0 0 0-.364 1.134v2.79h-.818v-6.66zm8.343 6.741a2.275 2.275 0 0 1-1.728-.7 2.58 2.58 0 0 1-.666-1.854 2.545 2.545 0 0 1 .675-1.85 2.564 2.564 0 0 1 3.479-.036 2.3 2.3 0 0 1 .652 1.688 3.041 3.041 0 0 1-.036.486h-3.935a1.7 1.7 0 0 0 .464 1.165 1.478 1.478 0 0 0 1.093.428 1.525 1.525 0 0 0 .851-.226 1.333 1.333 0 0 0 .509-.594h.882a2.274 2.274 0 0 1-.806 1.071 2.345 2.345 0 0 1-1.436.425zm1.107-4a1.615 1.615 0 0 0-2.178-.009 1.678 1.678 0 0 0-.478 1.147h3.105a1.543 1.543 0 0 0-.451-1.136zm4.581-1.021v.843a1.539 1.539 0 0 1 1.5-.919v.855h-.213a1.3 1.3 0 0 0-.959.328 1.586 1.586 0 0 0-.328 1.139v2.7h-.819v-4.944zm23.95-38.523c-10.441-4.312-36.735 4.8-40.456 5.73a44.775 44.775 0 0 1-9.88 1.108 5.1 5.1 0 0 1-3.263-.672s-.176 4.059 10.734 3.7c8.7-.288 23.063-5.719 35.344-4.328 8.478.959 11.14 7.161 11.14 7.161s11.183-6.585-3.619-12.699zM13.072 16.386a5.906 5.906 0 0 0-3.686-1.1 9.161 9.161 0 0 0-6.517 2.755A9.915 9.915 0 0 0 0 25.544a7.95 7.95 0 0 0 1.52 5.168 5.06 5.06 0 0 0 4.142 1.862 9.827 9.827 0 0 0 4.826-1.216 16.668 16.668 0 0 0 1.71-1.14 6.169 6.169 0 0 0 1.214-1.1l-.912-1.216-.57.456a7.41 7.41 0 0 1-1.6.912 4.783 4.783 0 0 1-1.938.456q-2.66 0-2.926-3.572l.912-.114a17.226 17.226 0 0 0 4.94-1.672 6.5 6.5 0 0 0 2.261-1.938 5.051 5.051 0 0 0 .931-3.1 3.519 3.519 0 0 0-1.438-2.944zm-4.56 6.27a5.149 5.149 0 0 1-3.078 1.634 15.161 15.161 0 0 1 .778-4.579q.778-2.451 2.223-2.451 1.216 0 1.216 2.052a4.867 4.867 0 0 1-1.139 3.344zm10.62 3.724a3.225 3.225 0 0 0-2.337.969 3.111 3.111 0 0 0-.988 2.3 3.049 3.049 0 0 0 .722 2.128 2.624 2.624 0 0 0 2.052.8 3.444 3.444 0 0 0 3.344-3.325 2.955 2.955 0 0 0-.722-2.09 2.686 2.686 0 0 0-2.071-.782zM58.139 6.088a3.354 3.354 0 0 0-.38-1.862 17.011 17.011 0 0 0-5.547 1.026l.228 1.672a64.8 64.8 0 0 1-1.881 12.255c-.088.4-.166.759-.248 1.135a10.108 10.108 0 0 1-3.836 1.126 23.553 23.553 0 0 0 1.026-6.194 12.085 12.085 0 0 0-1.634-6.593 5.113 5.113 0 0 0-4.543-2.565 5.983 5.983 0 0 0-4.959 2.869 10.838 10.838 0 0 0-2.053 6.461 8.728 8.728 0 0 0 1.6 5.586 7.222 7.222 0 0 0 4.56 2.527q-1.71 6.461-5.472 6.46a3.059 3.059 0 0 1-2.2-.836q-1.9-1.71-1.9-7.942 0-9.576 4.1-14.706l-.8-1.33a17.075 17.075 0 0 0-6.955 6.741 19.081 19.081 0 0 0-2.433 9.541q0 5.225 2.3 8.17a7.951 7.951 0 0 0 6.669 2.945 11.278 11.278 0 0 0 7.315-2.375 15.943 15.943 0 0 0 4.616-6.289 14.55 14.55 0 0 0 3.344-.684c.241-.077.461-.153.677-.229a45.96 45.96 0 0 0-1.057 6.252 3.356 3.356 0 0 0 .855 2.451 2.9 2.9 0 0 0 2.166.874 7.644 7.644 0 0 0 3.154-.874 16.177 16.177 0 0 0 3.135-1.9l-.684-1.33-2.66.95q-.342 0-.342-1.425a87.323 87.323 0 0 1 1.919-10.146q1.919-8.721 1.92-11.761zm-17.252 15.01a4.3 4.3 0 0 1-3.116-1.58 6.047 6.047 0 0 1-1.1-3.857 8.255 8.255 0 0 1 .969-4.161q.969-1.69 2.109-1.691t1.444 1.311a19.44 19.44 0 0 1 .3 4.028 32.352 32.352 0 0 1-.606 5.95zM65.092 6.164a3.481 3.481 0 0 0-2.413.954 2.9 2.9 0 0 0-1.045 2.2 2.657 2.657 0 0 0 .76 1.995 2.865 2.865 0 0 0 2.09.741 3.57 3.57 0 0 0 2.413-.95 2.842 2.842 0 0 0 1.083-2.186 2.7 2.7 0 0 0-.76-1.995 2.878 2.878 0 0 0-2.128-.759zm1.672 22.534a8.745 8.745 0 0 1-1.752.72q-.342 0-.342-1.2a26.464 26.464 0 0 1 1.026-5.092 25.411 25.411 0 0 0 1.026-5.491 3.436 3.436 0 0 0-.494-2.166 26.538 26.538 0 0 0-6.536.57l-.038.494.342.456a5.129 5.129 0 0 1 .988 3 23.979 23.979 0 0 1-.95 4.617 22.95 22.95 0 0 0-.95 4.94 3.1 3.1 0 0 0 .76 2.2 2.714 2.714 0 0 0 2.09.817 6.521 6.521 0 0 0 2.888-.779 13.391 13.391 0 0 0 2.128-1.235q.57-.456.912-.76l-.646-1.33zm13.6-13.414l-.532.494a6.521 6.521 0 0 0-1.216 1.862 8.522 8.522 0 0 0-.8 2.964l2.584 2.888a6.909 6.909 0 0 1-1.8 3.591q-1.73 2.147-3.173 2.147-.608 0-.608-1.52a34.907 34.907 0 0 1 .684-4.275 31.165 31.165 0 0 0 .684-4.655q0-2.128-.817-2.812a3.782 3.782 0 0 0-2.47-.684 11.846 11.846 0 0 0-3.705.684l-.114.456a6.22 6.22 0 0 1 .893 1.33 3.241 3.241 0 0 1 .438 1.444q0 2.7-.247 5.434t-.247 4.351a3.836 3.836 0 0 0 .855 2.6 3.066 3.066 0 0 0 2.451.988 7.345 7.345 0 0 0 5.016-2.337 17.444 17.444 0 0 0 3.952-5.681 15.68 15.68 0 0 0 1.482-6.346 2.876 2.876 0 0 0-.836-2.052 3.264 3.264 0 0 0-2.47-.871zm16.72 1.1a5.906 5.906 0 0 0-3.686-1.1 9.161 9.161 0 0 0-6.517 2.755 9.915 9.915 0 0 0-2.869 7.505 7.95 7.95 0 0 0 1.52 5.168 5.06 5.06 0 0 0 4.142 1.862 9.827 9.827 0 0 0 4.826-1.216 16.668 16.668 0 0 0 1.712-1.14 6.169 6.169 0 0 0 1.218-1.1l-.912-1.216-.57.456a7.41 7.41 0 0 1-1.6.912 4.783 4.783 0 0 1-1.938.456q-2.66 0-2.926-3.572l.912-.114a17.226 17.226 0 0 0 4.94-1.672 6.5 6.5 0 0 0 2.261-1.938 5.051 5.051 0 0 0 .931-3.1 3.519 3.519 0 0 0-1.44-2.944zm-4.56 6.27a5.149 5.149 0 0 1-3.078 1.634 15.161 15.161 0 0 1 .779-4.579q.778-2.451 2.223-2.451 1.216 0 1.216 2.052a4.867 4.867 0 0 1-1.136 3.346zm19.417-7.372a4.181 4.181 0 0 0-2.736 1.14 9 9 0 0 0-1.748 1.824 6.786 6.786 0 0 0-.456-2.774 27.039 27.039 0 0 0-6.574.57l-.038.494.342.456a4.419 4.419 0 0 1 1.064 2.584 51.641 51.641 0 0 1-1.026 5.434 42.031 42.031 0 0 0-1.026 5.833 7.493 7.493 0 0 0 .076 1.387h.266a16.859 16.859 0 0 0 5.282-.532q-.038-.342-.038-1.178a62.874 62.874 0 0 1 1.748-10.184 4.111 4.111 0 0 1 1.672-1.14q.3 0 .912 1.026a8.666 8.666 0 0 0 .646 1.026 4.851 4.851 0 0 0 1.881-.8 7.449 7.449 0 0 0 1.292-1.007q.322-.361.513-.589.004-3.567-2.048-3.568z"/>
          </svg>
        </Link>
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" activeClassName="active" exact to="/">Home.</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active"  to="/about-me/">About Me.</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/contact/">Contact.</Link>
          </li>
        </ul>
      </div>
      </div>
    </nav>
    </div>
)

export default Header
