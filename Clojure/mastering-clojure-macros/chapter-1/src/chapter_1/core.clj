(ns chapter-1.core
  (:gen-class))

(read-string "(+ 1 2 3 4)")
(class (read-string "(+ 1 2 3 4)"))

(eval (read-string "(+ 1 2 3 4)"))
(class (eval (read-string "(+ 1 2 3 4)")))

(let [expression (read-string "(+ 1 2 3 4)")]
  (cons (read-string "*")
        (rest expression)))

(let [expression (read-string "(+ 1 2 3 4)")]
  (cons (var *)
        (rest expression)))

(let [expression (quote (+ 1 2 3 4))]
  (cons (quote *)
        (rest expression)))

(defn print-with-asterisks [phrase]
  (print "*****")
  (print phrase)
  (print "*****"))

(print-with-asterisks
 (do
   (println "in arguments")
   "hello"))

(quote 1)
(quote "hello")
(quote :key)
(quote sym)

'(map inc [1 2 3])

(eval (let [expression '(+ 1 2 3 4)]
        (cons '*
              (rest expression))))

(defmacro when [test & body]
  (list 'if test (cons 'do body)))

(when (= 2 (+ 1 1))
  (println "Hello")
  (println "world!"))



(defn -main [& args]
  (println "Chapter 1: not ready yet"))
