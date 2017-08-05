(ns appendix-1.core
  (:gen-class))

;;; data types
(list 1 2 3)
'(1 2 3)
[1 2 3]
(vec '(1 2 3))
(vector 1 2 3)
#{1 2 3}
{:first 1 :second 2}

;;; anonymous function
((fn [arg] (println arg)) "hello")

(#(println %1 %2 %3) "Hello" "from" "Dima!")

;;; named functions


(defn -main [& args]
  (println "Appendix 1: Clojure Primer (not done yet)"))
