(ns chapter-2.core
  (:gen-class))

(defmacro assert [x]
  (when *assert*
    (list 'when-not x
          (list 'throw
                (list 'new 'AssertionError
                      (list 'str "Assert failed: "
                            (list 'pr-str (list 'quote x))))))))

(assert (= 1 2))
(macroexpand '(assert (= 1 2)))

(defn -main [& args]
  (println "Chapter 2: not ready yet"))
