# A linesr optimization example
# linear optimization (linear programming)
# 
# Maximize 3x + y subject to the following constraints:
#   0 <= x     <= 1
#   0 <= y     <= 2
#        x + y <= 2
#
# Main steps in solving the problem
#
# Import the required libraries
# Declare the solver.
# Create the variables.
# Define the constraints.
# Define the objective function.
# Invoke the solver and display the results.

from ortools.linear_solver import pywraplp


def main():
    # Create the linear solver  with the GLOP backend.
    solver = pywraplp.Solver.CreateSolver('GLOP')

    # pywraplp is a python wrapper for the underlying C++ solver. GLOP is the OR-Tools linear solver

    # Create the variables x and y.
    x = solver.NumVar(0, 1, 'x')
    y = solver.NumVar(0, 2, 'y')

    print('Number of variables =', solver.NumVariables())

    # Create a linear constraint, 0 <= x + y <= 2.
    ct = solver.Constraint(0, 2, 'ct')
    ct.SetCoefficient(x, 1)
    ct.SetCoefficient(y, 1)

    print('Number of constraints =', solver.NumConstraints())

    # the methos SetCoefficient sets the coefficients of x and y in the expression for the constraint.

    # Create the objective function, 3 * x + y.
    objective = solver.Objective()
    objective.SetCoefficient(x, 3)
    objective.SetCoefficient(y, 1)
    objective.SetMaximization()

    # the methos SetMaximization declares this to be a maximization problem.

    solver.Solve()
    print('Solution:')
    print('Objective value =', objective.Value())
    print('x =', x.solution_value())
    print('y =', y.solution_value())


if __name__ == '__main__':
    main()
