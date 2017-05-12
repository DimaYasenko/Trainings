(ns chapter-6.core
  (:gen-class))

;;;;;;
;;;Refs
;;;;;;

(def all-users (ref {}))
all-users
(deref all-users)
@all-users

(dosync
 (ref-set all-users {}))

(defn make-user [id login salary]
  {:id id
   :login login
   :salary salary})

;;; not really commute because of ids but for simplicity let's imagine that it is commute
(defn add-new-user! [login salary]
  (dosync
   (let [new-id (count @all-users)
         new-user (make-user new-id login salary)]
     (commute all-users assoc new-id new-user))))

(defn remove-user! [id]
  (dosync
   (alter all-users dissoc id)))

(add-new-user "Dima" 30000)
(add-new-user "Dima2" 40000)
(add-new-user "Dima3" 50000)
(add-new-user "Dima4" 60000)


;;;;;;
;;;Agents
;;;;;;
(def total-cpu-time (agent 0))
(deref total-cpu-time)
@total-cpu-time
total-cpu-time

;(send total-cpu-time + 100)

;(send-off total-cpu-time + 100)

(await total-cpu-time)

(await-for 1000 total-cpu-time)

(def bad-agent (agent 10))
(send bad-agent / 0)
(send bad-agent + 1)
@bad-agent
(agent-error bad-agent)

(let [exception (agent-error bad-agent)
      stack-trace (.getStackTrace exception)]
  (println (clojure.string/join "\n" stack-trace)))

(clear-agent-errors bad-agent)

;;;;;;
;;;Atoms
;;;;;;

(def total-rows (atom 0))
total-rows
@total-rows
(deref total-rows)

(reset! total-rows 6)

(swap! total-rows + 6)

;;;;;;
;;;Vars
;;;;;;

(def hbase-master "localhost")
(def ^:dynamic *hbase-master* "localhost")
(println "HBase master: " *hbase-master*)
(bound? #'*hbase-master*)

(def ^:dynamic *rabbitmq-host*)
(println "Rabbit MQ host: " *rabbitmq-host*)
(bound? #'*rabbitmq-host*)

(def ^:dynamic *mysql-host*)
(def mysql-hosts ["test-mysql" "dev-mysql" "staging-mysql"])

(defn db-query [db]
  (binding [*mysql-host* db]
    (count *mysql-host*)))

(pmap db-query mysql-hosts)

;;; Watching for mutation

(def adi (atom 0))

(defn adi-onchange [the-key the-ref old-value new-value]
  (println "Hey, there is some changes from " old-value " to " new-value))

(add-watch adi :adi-watcher adi-onchange)

(swap! adi inc)

(remove-watch adi :adi-watcher)

;;; Future and promises

(defn long-calculation [first-argument second-argument]
  (Thread/sleep 5000)
  (* first-argument second-argument))

(defn long-run []
  (let [x (long-calculation 11 11)
        y (long-calculation 22 22)
        z (long-calculation 33 33)]
    (* x y z)))
(time (long-run))

(defn fast-run []
  (let [x (future (long-calculation 11 11))
        y (future (long-calculation 22 22))
        z (future (long-calculation 33 33))]
    (* @x @y @z)))
(time (fast-run))

(let [p (promise)]
  (future
    (Thread/sleep 5000)
    (deliver p :done))
  (println "Before done")
  (println @p)
  (println "Really done!"))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Chapter 6: finished"))
