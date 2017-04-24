(ns chapter-5.core
  (import [java.util Date Set Calendar Random])
  (:import [java.awt.event MouseAdapter])
  (:gen-class))

;;; Chapter 5

;(import 'java.util.Date 'java.text.SimpleDateFormat)

(def sdf (new SimpleDateFormat "yyyy-MM-dd"))
(def sdf-2 (SimpleDateFormat. "yyyy-MM-dd"))

(defn string-to-date [date-string]
  (let [sdf (SimpleDateFormat. "yyyy-MM-dd")]
    (.parse sdf date-string)))

(string-to-date "2008-11-28")

(Long/parseLong "1111111111111")

(Calendar/JANUARY)
(Calendar/FEBRUARY)

(. System getenv "PATH")

(def random (Random.))

(. random nextInt 10)

(. Calendar JANUARY)

(. (. (Calendar/getInstance) getTimeZone) getDisplayName)

(.. (Calendar/getInstance) getTimeZone getDisplayName)

(def tokens (.split "clojure.in.action" "\\."))
(alength tokens)
(aget tokens 0)
(aset tokens 0 "Hello")

(proxy [MouseAdapter] []
    (mousePressed [event]
      (println "Hey, from mouse adapter!")))

(reify java.io.FileFilter
  (accept [this f]
    (.isDirectory f)))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 5: finished"))
