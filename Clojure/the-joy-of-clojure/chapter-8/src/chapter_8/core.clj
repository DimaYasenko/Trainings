(ns chapter-8.core
  (:gen-class))

(-> 25 Math/sqrt int list)
(list (int (Math/sqrt 25)))

(eval 25)
(eval '(list 1 2 3))
(eval (1 2 3))

(eval (+ 1 2))
(eval (list (symbol "+") 1 2))



(defn -main [& args]
  (println "Chapter 8: not ready yet"))
