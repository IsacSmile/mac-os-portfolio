import { useEffect, useState } from "react";
import MacWindow from "./MacWindow";
import Terminal from "react-console-emulator";
import "./cli.scss";

const Cli = ({ windowName, setWindowState }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const commands = {
    welcome: {
      fn: () =>
        "Welcome to Faiz Imam's Terminal Portfolio.\nType 'help' to explore. Built with focus, not flash.",
    },

    about: {
      fn: () =>
        "Hi, I'm Faiz Imam — a developer with a strong hold on frontend development. I enjoy building clean, usable interfaces where design meets logic.",
    },

    journey: {
      fn: () =>
        "Started with curiosity, stayed for the craft. I believe consistency beats talent when talent stops working.",
    },

    skills: {
      fn: () =>
        "HTML, CSS, JavaScript, React, Responsive Design, Git, UI Debugging, Component-based Architecture",
    },

    projects: {
      fn: () =>
        "1. Mac-OS Inspired Portfolio\n2. Frontend Web Interfaces\n3. Personal Experiments focused on UI & UX",
    },

    philosophy: {
      fn: () =>
        "Good frontend is invisible. If users don’t struggle, the developer has done the job right.",
    },

    contact: {
      fn: () =>
        "Email: itsfaizimam@gmail.com\nGitHub: https://github.com/IsacSmile",
    },

    signature: {
      fn: () =>
        "Trust upon Allah Alone!, Learn deeply. Build honestly. Improve daily.",
    },

    echo: {
      fn: (...args) => args.join(" "),
    },
  };

  if (!mounted) return null;

  return (
    <MacWindow windowName={windowName} setWindowState={setWindowState}>
      <div className="cli-window">
        <Terminal
          commands={commands}
          welcomeMessage="Welcome to Faiz Imam's Terminal Portfolio.\nType 'help' to explore."
          promptLabel="faiz_imam@:~$"
          promptLabelStyle={{ color: "#00ff00" }}
          contentStyle={{ color: "#e5e5e5" }}
        />
      </div>
    </MacWindow>
  );
};

export default Cli;
