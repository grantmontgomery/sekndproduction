import * as React from "react";
import css from "../styles/About.module.scss";
import { Layout, ResultCard, DatePart } from "../components";

export default function About() {
  return (
    <Layout>
      <main className={css.pageContainer}>
        <section className={css.description}>
          <h1>Less Time Looking, More Second Dates</h1>
          <p>
            The past decade has defined the era of matchmaking apps and has made
            meeting new people fast and convenient. But the convenience and
            simplicity ends once you match with someone and the questions comes
            up, "What should I plan for the first date?". What started out as a
            simple React Application has turned in to creating the first "date
            making" app and helping others solve that question with the same
            simplicity and convenience which brought them together in the first
            place.
          </p>
          <p className={css.builtWith}>
            Built with TypeScript, Next.js, and Sass.
          </p>
          <p className={css.deployedWith}>Deployed with Severless and AWS.</p>

          <a
            href="https://grantcreates.com"
            target="_blank"
            className={css.grantCreatesLink}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1614.47 548.59"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="269.22"
                  y1="211.11"
                  x2="26.43"
                  y2="621.89"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.03" />
                  <stop offset="0.08" stopColor="#070707" />
                  <stop offset="0.3" stopColor="#1f1f1f" />
                  <stop offset="0.5" stopColor="#2e2e2e" />
                  <stop offset="0.67" stopColor="#333" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-2"
                  x1="225.81"
                  y1="-94.66"
                  x2="-202.56"
                  y2="786.59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#333" />
                  <stop offset="0.26" stopColor="#2e2e2e" />
                  <stop offset="0.57" stopColor="#202020" />
                  <stop offset="0.91" stopColor="#080808" />
                  <stop offset="1" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-3"
                  x1="174.64"
                  y1="48.14"
                  x2="331.6"
                  y2="944.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.13" />
                  <stop offset="0.15" stopColor="#0b0b0b" />
                  <stop offset="0.2" stopColor="#1d1d1d" />
                  <stop offset="0.26" stopColor="#2a2a2a" />
                  <stop offset="0.33" stopColor="#313131" />
                  <stop offset="0.51" stopColor="#333" />
                </linearGradient>

                <linearGradient
                  id="linear-gradient-5"
                  x1="291.32"
                  y1="33.51"
                  x2="502.23"
                  y2="569.78"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.2" />
                  <stop offset="0.26" stopColor="#121212" />
                  <stop offset="0.34" stopColor="#242424" />
                  <stop offset="0.42" stopColor="#2f2f2f" />
                  <stop offset="0.51" stopColor="#333" />
                </linearGradient>
                <linearGradient
                  id="linear-gradient-6"
                  x1="343.05"
                  y1="-77.53"
                  x2="612.82"
                  y2="493.08"
                />
              </defs>
              <title>GrantCreatesDarkLogo</title>
              <g id="Layer_5" data-name="Layer 5">
                <path
                  style={{ fill: "black" }}
                  d="M153.32,199.38s46.43,4.47,89.32-2.79"
                />
                <rect
                  style={{ fill: "black" }}
                  x="242.34"
                  y="195.85"
                  width="7.04"
                  height="2.81"
                />
                <path
                  style={{ fill: "#e6e6e6" }}
                  d="M152,198.49h2.13a0,0,0,0,1,0,0v1.28a0,0,0,0,1,0,0H153a.94.94,0,0,1-.94-.94v-.34A0,0,0,0,1,152,198.49Z"
                />
                <path
                  style={{
                    fill: "none",
                    stroke: "black",
                    strokeWidth: "2px",
                  }}
                  d="M156.28,205.54s82.63,137.83,91.09,194.22"
                />
                <rect
                  style={{ fill: "black" }}
                  x="241.91"
                  y="398.19"
                  width="7.36"
                  height="18.26"
                />
                <path
                  style={{ fill: "#e6e6e6" }}
                  d="M152.09,199.13l5.75.38v6h0c-.93,2.3-3.94-2.89-4.74-4.62Z"
                />
                <path
                  style={{ strokeWidth: "3px", stroke: "black" }}
                  d="M390.72,208s-92.1,160.49-89.33,190.93"
                />
                <path
                  style={{ fill: "#e6e6e6" }}
                  d="M396,199.93h0l-8.38,5.23,3.12,5S393.45,203.26,396,199.93Z"
                />
                <path
                  style={{ fill: "#e6e6e6" }}
                  d="M299.84,176.41h0v14.81h8.83S302,182.35,299.84,176.41Z"
                />
                <path
                  style={{ fill: "#e6e6e6" }}
                  d="M299.46,394h0V413.7h11.72S302.36,401.92,299.46,394Z"
                />
                <path
                  style={{ strokeWidth: "3px", stroke: "black" }}
                  d="M301.33,186.06s117-31,159.55-57.5"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M667.53,271.14A146.6,146.6,0,0,1,638,268q-15.32-3.15-24.06-8.07l4.1-34.45a77.78,77.78,0,0,0,21.06,8.47,96.11,96.11,0,0,0,24.33,3.29q23.25,0,34.33-10.53t11.07-33V183.9A45.35,45.35,0,0,1,690,200.44q-11.76,5.61-27.35,5.61a61.46,61.46,0,0,1-33-9q-14.64-9-23.11-25.84t-8.48-38.69a82.26,82.26,0,0,1,8.34-37.06,68.69,68.69,0,0,1,23.66-27.07A60.53,60.53,0,0,1,664.52,58.1,56.41,56.41,0,0,1,690.36,64a46.25,46.25,0,0,1,18.46,16.55l.55-18.05h36.37V191.83q0,39.1-19.69,59.21T667.53,271.14Zm5.47-99q16.13,0,26.52-11.21t10.4-29q0-17.5-10.26-28.72T673,92q-16.41,0-26.67,11.21t-10.25,28.72q0,17.77,10.39,29T673,172.14Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M786.21,62.48h36.65l.27,23q5.75-12.32,15.46-18.87A39.24,39.24,0,0,1,861.14,60a42.47,42.47,0,0,1,16.14,3L874,98.85a46.68,46.68,0,0,0-17-3.28q-15.6,0-24.21,11.21t-8.61,31.45v63.44h-38Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M957.68,206.05a61.43,61.43,0,0,1-32.95-9q-14.64-9-23.11-25.84t-8.48-38.69a82.26,82.26,0,0,1,8.34-37.06,68.61,68.61,0,0,1,23.66-27.07A60.5,60.5,0,0,1,959.6,58.1,56.44,56.44,0,0,1,985.44,64a46.32,46.32,0,0,1,18.46,16.55l.54-18.05h36.38V201.67h-36.38l-.54-17.77A45.47,45.47,0,0,1,985,200.44Q973.27,206.05,957.68,206.05Zm10.39-33.91q16.14,0,26.53-11.21t10.39-29q0-17.5-10.26-28.72T968.07,92q-16.41,0-26.66,11.21t-10.26,28.72q0,17.77,10.4,29T968.07,172.14Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1081.29,62.48h36.65l.27,17.22a40.65,40.65,0,0,1,16.82-16q10.8-5.61,25.29-5.61,24.62,0,37.61,15.18t13,43.89v84.5h-38V124.28q0-32.53-24.88-32.54-13.68,0-21.19,9.16t-7.53,25.84v74.93h-38Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1311.82,206.05q-26,0-38.56-13.26t-12.57-40.61V93.93h-27.08V62.48h27.08V24.74h38V62.48h43.48V93.93H1298.7v51.41q0,14.5,4.92,20.78t16.68,6.29a51.11,51.11,0,0,0,24.61-6l4.11,31.73a59.12,59.12,0,0,1-16.28,5.74A97.37,97.37,0,0,1,1311.82,206.05Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M677.55,489.35q-22.69,0-40.06-8.75a63.46,63.46,0,0,1-26.93-25.16Q601,439,601,416.88q0-21.33,9.3-38a66.51,66.51,0,0,1,26.66-26.25q17.37-9.57,40.34-9.58a111.55,111.55,0,0,1,24.48,2.74,74.44,74.44,0,0,1,20.37,7.38l-4.65,32.27q-18.32-8.74-36.64-8.75-19.15,0-30.5,10.67T639,416.06q0,18.6,11.49,29.13t31.45,10.53q17.51,0,38-8.48l3.83,31.17a73.66,73.66,0,0,1-21.06,8.07A110.57,110.57,0,0,1,677.55,489.35Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M756.86,346.6H793.5l.28,23q5.75-12.3,15.45-18.87a39.35,39.35,0,0,1,22.56-6.56,42.35,42.35,0,0,1,16.14,3L844.64,383a46.6,46.6,0,0,0-16.95-3.28q-15.59,0-24.2,11.21t-8.62,31.45V485.8h-38Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M944.73,490.17q-24.35,0-42.52-8.75a65.12,65.12,0,0,1-28.3-25.57Q863.79,439,863.79,416.34q0-21.06,8.75-37.88a65.89,65.89,0,0,1,24.88-26.53q16.14-9.71,37.47-9.71,19.7,0,34.59,8.34a58.3,58.3,0,0,1,23.25,23.93q8.34,15.6,8.34,36.92a90.53,90.53,0,0,1-1.37,16.41H901.52Q908.63,459,948.84,459a113.86,113.86,0,0,0,24.47-2.6,87.62,87.62,0,0,0,21.47-7.52l3.83,29.81a86,86,0,0,1-24.07,8.47A143.37,143.37,0,0,1,944.73,490.17Zm20-88.88q-1.38-14.49-9.44-22.28t-21.47-7.8q-13.12,0-21.6,7.8t-10.94,22.28Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1094.87,490.17a61.57,61.57,0,0,1-33-9q-14.62-9-23.11-25.84t-8.47-38.7a82.16,82.16,0,0,1,8.34-37.06,68.73,68.73,0,0,1,23.65-27.07,60.53,60.53,0,0,1,34.46-10.26,56.49,56.49,0,0,1,25.85,5.88,46.47,46.47,0,0,1,18.46,16.55l.54-18H1178V485.8h-36.37l-.54-17.78a45.56,45.56,0,0,1-18.87,16.55Q1110.44,490.17,1094.87,490.17Zm10.39-33.91q16.14,0,26.53-11.21t10.39-29q0-17.49-10.26-28.71t-26.66-11.22q-16.41,0-26.66,11.22t-10.26,28.71q0,17.79,10.39,29T1105.26,456.26Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1279.74,490.17q-26,0-38.56-13.26T1228.6,436.3V378.05h-27.08V346.6h27.08V308.86h38V346.6h43.48v31.45h-43.48v51.41q0,14.51,4.92,20.79t16.68,6.29a51.2,51.2,0,0,0,24.61-6l4.11,31.72a59.16,59.16,0,0,1-16.27,5.74A97.43,97.43,0,0,1,1279.74,490.17Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1416.47,490.17q-24.35,0-42.52-8.75a65.2,65.2,0,0,1-28.31-25.57q-10.12-16.82-10.12-39.51,0-21.06,8.75-37.88a65.92,65.92,0,0,1,24.89-26.53q16.14-9.71,37.47-9.71,19.69,0,34.59,8.34a58.36,58.36,0,0,1,23.25,23.93q8.34,15.6,8.34,36.92a90.53,90.53,0,0,1-1.37,16.41h-98.18q7.11,31.19,47.32,31.18a113.86,113.86,0,0,0,24.47-2.6,87.77,87.77,0,0,0,21.47-7.52l3.83,29.81a86.16,86.16,0,0,1-24.07,8.47A143.37,143.37,0,0,1,1416.47,490.17Zm20-88.88Q1435.06,386.8,1427,379t-21.47-7.8q-13.12,0-21.6,7.8T1373,401.29Z"
                />
                <path
                  style={{ fill: "#4d4d4d" }}
                  d="M1554.3,490.17a119.36,119.36,0,0,1-30.08-3.69q-14.22-3.69-21.88-9.7l4.65-30.91a87.32,87.32,0,0,0,45.67,13.95q23.25,0,23.25-11.76a10.79,10.79,0,0,0-4.92-9.57q-4.93-3.28-20.51-7.66-24.62-6.82-35.15-17.37t-10.53-28.3q0-20,15-31.45t41.29-11.49a112.81,112.81,0,0,1,25.71,3q12.86,3,21.05,7.93l-4.37,30.09a77.57,77.57,0,0,0-19.55-7.8,84.75,84.75,0,0,0-21.2-2.87q-20,0-20,10.67a11,11,0,0,0,4.78,9.43q4.79,3.42,19,7.52,26.25,7.67,37.05,18.05T1614.47,447q0,20.23-16,31.72T1554.3,490.17Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient)" }}
                  d="M249.57,419.08A129.54,129.54,0,0,1,120.05,548.6H0a32.26,32.26,0,0,1,4.84-17,32.82,32.82,0,0,1,13-12C107,474.4,168.46,377.74,169.51,271.52A168.89,168.89,0,0,0,152,199.21C153.54,201.6,249.57,354.83,249.57,419.08Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient-2)" }}
                  d="M249.57,91H144.79A104.77,104.77,0,0,0,249.57,195.76c-61.48,8.71-97.53,3.45-97.53,3.45a168.44,168.44,0,0,1-80-29.93,170.21,170.21,0,0,1-54.55-63.62h0A168.72,168.72,0,0,1,0,30.58H169.53V0h30.56a49.47,49.47,0,0,1,49.48,49.47Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient-3)" }}
                  d="M249.57,195.76V419.08c0-64.25-96-217.48-97.53-219.87C152,199.21,188.09,204.47,249.57,195.76Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient)" }}
                  d="M548.59,548.6h-120A129.47,129.47,0,0,1,299,419.08c0-64.12,95.71-216.79,97.5-219.82a168.86,168.86,0,0,0-17.45,72.25c1.06,106.22,62.48,202.89,151.62,248.13A32.49,32.49,0,0,1,548.59,548.6Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient-5)" }}
                  d="M470.72,123.69c-1.4.86-46.53,28.72-74.19,75.57-1.79,3-97.5,155.7-97.5,219.82V186.59C347.34,175.57,405.59,156.45,470.72,123.69Z"
                />
                <path
                  style={{ fill: "url(#linear-gradient-6)}" }}
                  d="M548.59,0V2c0,51.2-29.41,97.55-75.27,120.32l-2.57,1.31h0l0,0c-65.13,32.76-123.38,51.88-171.69,62.9V49.47A49.47,49.47,0,0,1,348.5,0Z"
                />
              </g>
            </svg>
          </a>
          <a
            className={css.codeLink}
            href="https://github.com/grantmontgomery/sekndproduction"
            target="_blank"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub icon</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            <span>See the code</span>
          </a>
        </section>
      </main>
    </Layout>
  );
}
