(ns chapter-3.core
  (:gen-class))

;;; Metadata

(def untrusted-1 (with-meta {:command "delete-table" :subject "users"}
                   {:safe? false :io true}))

(def untrusted-2 ^{:safe? false :io true} {:command "delete-table" :subject "users"})

(def trusted {:command "delete-table" :subject "users"})

(= trusted untrusted-1 untrusted-2)

(defn ^{:safe? true :console true :doc "Testing doc/meta"}
  testing-meta []
  (println "Testing meta"))

(doc testing-meta)
(meta (var testing-meta))

;;; Java hints

(set! *warn-on-reflection* true)

(defn string-length [str]
  (.length str))

(time (reduce + (map string-length (repeat 100000 "12345"))))

(defn fast-string-length [^String str]
  (.length str))

(time (reduce + (map fast-string-length (repeat 100000 "12345"))))

;;; Java exceptions

(defn average [numbers]
  (let [sum (apply + numbers)]
    (/ sum (count numbers))))

(defn safe-average [numbers]
  (let [sum (apply + numbers)]
    (try
      (/ sum (count numbers))
      (catch ArithmeticException e
        (println "Division by zero!"))
      (finally
        (println "Done!")
        0))))


;;; Functions

(defn total-cost
  "This function calculates total cost of the item"
  [item-cost quantity]
  {:pre [(> item-cost 0) (> quantity 0)]
   :post [(> % 0)]}
  (* item-cost quantity))





(defn -main [& args]
  (println "Chapter 3: not ready yet"))
