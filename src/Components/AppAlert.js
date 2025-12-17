import React, { useState } from "react";

export default function AndroidDownloadAlert() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-2xl p-6 relative">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-white hover:text-white transition-colors text-xl"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            <div className="bg-white rounded-full p-3 text-2xl">📱</div>
          </div>

          <div className="flex-1 pt-1">
            <h3 className="text-white font-bold text-lg mb-1">
              Get Vipin Notes on Android!
            </h3>
            <p className="text-white text-sm mb-4">
              Download our mobile app for a better experience on the go.
            </p>

            <a
              href="https://github.com/AVVKavvk/vipin-notes-app/releases/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-600 font-semibold px-5 py-2.5 rounded-lg hover:bg-purple-50 transition-all duration-200 shadow-lg"
            >
              ⬇ Download APK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
